<?php

namespace unionco\googleservices\services;

use Craft;
use craft\base\Component;
use craft\base\ElementInterface;
use craft\elements\db\ElementQueryInterface;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\TransferException;
use unionco\googleservices\fields\GooglePlacesField;
use unionco\googleservices\models\GoogleServicesModel;
use unionco\googleservices\records\GooglePlacesReviewRecord;
use unionco\googleservices\records\GoogleServicesRecord;
use craft\base\Element;

class GoogleServicesService extends Component
{
    /**
     * @var string Google API Key
     */
    protected $apiKey;

    /**
     * @var \GuzzleHttp\Client Guzzle Client
     */
    protected $client;

    /**
     * @var string base uri
     */
    protected $baseUri = 'https://maps.googleapis.com/maps/api/place/details/json';

    public function __construct()
    {
        $this->apiKey = 'AIzaSyD_gsDi_BkNZe8W0aiTMairYF1F6hTqvUs';
        $this->client = new Client();
    }

    /**
     * @param string $ref
     * @param array $params
     * @return string image url
     */
    public function image(string $ref, array $params)
    {
        $url = "https://maps.googleapis.com/maps/api/place/photo?photoreference={$ref}&key={$this->apiKey}";

        if (isset($params['maxHeight'])) {
            $url .= "&maxheight={$params['maxHeight']}";
        }

        if (isset($params['maxWidth'])) {
            $url .= "&maxwidth={$params['maxWidth']}";
        }

        return $url;
    }

    /**
     * @param string $placeDetails JSON-encoded place details
     * @return array{fullAddress: string, phoneNumber: string, rating: double, placeUrl: string, website: string,
     * hours: string, latitude: string, longitude: string, city: string, state: string, postalCode: string,
     * placePhotos: string, reviewListing: string}
     */
    public function transform($placeDetails)
    {
        $details = json_decode($placeDetails)->result;

        /** @var string */
        $fullAddress = (string) $details->formatted_address ?? '';

        /** @var string */
        $phoneNumber = (string) $details->formatted_phone_number ?? '';

        /** @var double */
        $rating = (double) ($details->rating ?? 0.0);

        /** @var string */
        $placeUrl = $details->url ?? '';

        /** @var string */
        $website = $details->website ?? '';

        /** @var string */
        $hours = json_encode(($details->opening_hours->periods ?? []));

        /** @var string */
        $latitude = (string) $details->geometry->location->lat;

        /** @var string */
        $longitude = (string) $details->geometry->location->lng;

        /** @var string */
        $city = array_values(
            array_filter(
                $details->address_components,
                /**
                 * @param \stdClass $comp
                 * @return bool
                 **/
                function ($comp) {
                    return in_array('locality', $comp->types);
                }
            )
        )[0]->long_name ?? '';

        /** @var string */
        $state = array_values(
            array_filter(
                $details->address_components,
                /**
                 * @param \stdClass $comp
                 * @return bool
                 */
                function ($comp) {
                    return in_array('administrative_area_level_1', $comp->types);
                }
            )
        )[0]->short_name ?? '';

        /** @var string */
        $postalCode = array_values(
            array_filter(
                $details->address_components,
                /**
                 * @param \stdClass $comp
                 * @return bool
                 **/
                function ($comp) {
                    return in_array('postal_code', $comp->types);
                }
            )
        )[0]->short_name ?? '';

        /** @var string */
        $placePhotos = '';
        if (isset($details->photos) && is_array($details->photos)) {
            $placePhotos = json_encode(
                array_map(
                    /**
                     * @param \stdClass $photo
                     * @return array{col1: false|string}
                     */
                    function ($photo) {
                        return [
                            'col1' => $this->getImageUrl($photo->photo_reference, ['maxheight' => 650]),
                        ];
                    },
                    $details->photos
                )
            );
        }

        /** @var string */
        $reviewListing = '';
        if (isset($details->reviews) && is_array($details->reviews)) {
            $reviewListing = json_encode(
                array_map(
                    /**
                     * @param \stdClass $review
                     * @return array{col1: string, col2: string, col3: string, col4: string, col5: string}
                     */
                    function ($review) {
                        return [
                            'col1' => (string) $review->author_name ?? '',
                            'col2' => (string) $review->profile_photo_url ?? '',
                            'col3' => $this->removeEmoji($review->text),
                            'col4' => (string) $review->rating,
                            'col5' => (string) $review->relative_time_description,
                        ];
                    },
                    $details->reviews
                )
            );
        }

        return [
            'fullAddress' => $fullAddress,
            'phoneNumber' => $phoneNumber,
            'rating' => $rating,
            'placeUrl' => $placeUrl,
            'website' => $website,
            'hours' => $hours,
            'latitude' => $latitude,
            'longitude' => $longitude,
            'city' => $city,
            'state' => $state,
            'postalCode' => $postalCode,
            'placePhotos' => $placePhotos,
            'reviewListing' => $reviewListing,
        ];
    }

    /**
     * @param string $value
     * @return string
     */
    public function removeEmoji(string $value)
    {
        return preg_replace('/[^\s\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\`\{\}\|\[\]\\\\\:\"\;\'\<\>\?\,\.\/\w]/', '', $value);
    }

    /**
     * @param string $imageRef,
     * @param array $params
     * @return false|string
     */
    public function getImageUrl($imageRef, $params = [])
    {
        $params = array_merge([
            'key' => $this->apiKey,
            'photoreference' => $imageRef,
        ], $params);

        try {
            $response = $this->client->request('GET', 'https://maps.googleapis.com/maps/api/place/photo', [
                'query' => $params,
                'allow_redirects' => false,
            ]);
        } catch (TransferException $e) {
            return false;
        } catch (\Exception $e) {
            return false;
        }

        if ($response->getStatusCode() === 302) {
            $imageUrl = $response->getHeader('location')[0];
            return $imageUrl;
        }

        return false;
    }

    /**
     * @param string $placeId
     * @return false|string
     */
    public function getDetails($placeId)
    {
        try {
            $response = $this->client->request('GET', $this->baseUri, [
                'query' => ['key' => $this->apiKey, 'placeid' => $placeId],
            ]);
        } catch (TransferException $e) {
            return false;
        } catch (\Exception $e) {
            return false;
        }

        if ($response->getStatusCode() === 200) {
            $body = (string) $response->getBody();
            return $body;
        }

        return false;
    }

    /**
     * @param string $photoRef
     * @return false|string
     */
    public function getPhoto($photoRef)
    {
        try {
            $response = $this->client->request('GET', 'https://maps.googleapis.com/maps/api/place/photo', [
                'allow_redirects' => false,
                'query' => [
                    'key' => $this->apiKey,
                    'photoreference' => $photoRef,
                    'maxwidth' => 1000,
                ],
            ]);
        } catch (TransferException $e) {
            return false;
        } catch (\Exception $e) {
            return false;
        }

        if ($response->getStatusCode() === 302) {
            $imageUrl = $response->getHeader('location')[0];
            return $imageUrl;
        }

        return false;
    }

    /**
     * @param GooglePlacesField $field
     * @param \craft\base\ElementInterface $owner
     * @param mixed $value
     * @return \unionco\googleservices\models\GoogleServicesModel
     */
    public function getField(GooglePlacesField $field, ElementInterface $owner, $value)
    {
        /** 
         * @var string 
         * @psalm-suppress NoInterfaceProperties
         **/
        $ownerId = (string) $owner->id;

        /** 
         * @var string 
         * @psalm-suppress NoInterfaceProperties
         **/
        $ownerSiteId = (string)$owner->siteId;

        /** @var null|GoogleServicesRecord */
        $record = GoogleServicesRecord::findOne([
            'ownerId' => $ownerId,
            'ownerSiteId' => $ownerSiteId,
            'fieldId' => $field->id,
        ]);

        if (!Craft::$app->request->isConsoleRequest
            && Craft::$app->request->isPost
            && $value) {
            $model = new GoogleServicesModel($value);
        } elseif ($record) {
            $model = new GoogleServicesModel($record->getAttributes());
        } else {
            $model = new GoogleServicesModel();
        }

        return $model;
    }

    /**
     * @param \craft\elements\db\ElementQueryInterface $query
     * @param mixed $value
     * @return null
     */
    public function modifyElementsQuery(ElementQueryInterface $query, $value)
    {
        if (!$value) {
            return null;
        }

        $tableName = GoogleServicesRecord::$tableName;
        $tableAlias = 'googleservices' . bin2hex(openssl_random_pseudo_bytes(5));

        $on = [
            'and',
            '[[elements.id]] = [[' . $tableAlias . '.ownerId]]',
            '[[elements_sites.siteId]] = [[' . $tableAlias . '.ownerSiteId]]',
        ];

        /** @psalm-suppress NoInterfaceProperties */
        $query->query->join(
            'JOIN',
            "{$tableName} {$tableAlias}",
            $on
        );

        /** @psalm-suppress NoInterfaceProperties */
        $query->subQuery->join(
            'JOIN',
            "{$tableName} {$tableAlias}",
            $on
        );

        return null;
    }

    /**
     * @param GooglePlacesField $field
     * @param Element $owner
     * @return bool
     */
    public function saveField(GooglePlacesField $field, Element $owner): bool
    {
        /** @var string */
        $fieldHandle = $field->handle ?? '';
        
        $value = $owner->getFieldValue($fieldHandle);

        $record = GoogleServicesRecord::findOne([
            'ownerId' => $owner->id,
            'ownerSiteId' => $owner->siteId,
            'fieldId' => $field->id,
        ]);

        if (!$record) {
            $record = new GoogleServicesRecord();
            $record->ownerId = $owner->id;
            $record->ownerSiteId = $owner->siteId;
            $record->fieldId = $field->id;
        }

        $record->placeId = $value->placeId;
        $record->latitude = (float) $value->latitude;
        $record->longitude = (float) $value->longitude;
        $record->formattedAddress = $value->formattedAddress;
        $record->formattedPhone = $value->formattedPhone;
        $record->rating = (float) $value->rating;
        $record->postalCode = $value->postalCode;
        $record->city = $value->city;
        $record->state = $value->state;

        $save = $record->save();

        if ($save) {
            $reviews = json_decode($value->reviewsJson);
            if ($reviews && count($reviews)) {
                foreach ($reviews as $review) {

                    $reviewRecord = GooglePlacesReviewRecord::findOne([
                        'placesRecordId' => $record->id,
                        'authorName' => $review->author_name,
                    ]);

                    if (!$reviewRecord) {
                        $reviewRecord = new GooglePlacesReviewRecord();
                    }
                    $reviewRecord->placesRecordId = $record->id;
                    $reviewRecord->authorName = $review->author_name;
                    $reviewRecord->profilePhotoUrl = $review->profile_photo_url;
                    $reviewRecord->relativeTimeDescription = $review->relative_time_description;
                    $reviewRecord->text = $review->text;
                    $reviewRecord->rating = (float) $review->rating;

                    $reviewSave = $reviewRecord->save();
                }
            }
        }

        return $save;
    }
}
