<?php

namespace unionco\googleservices\models;

use craft\base\Model;
use unionco\googleservices\records\GooglePlacesReviewRecord;

class GoogleServicesModel extends Model
{
    /** @var int */
    public $id = 0;

    /** @var int */
    public $placeId = 0;

    /** @var float */
    public $latitude = 0.0;

    /** @var float */
    public $longitude = 0.0;

    /** @var string */
    public $formattedAddress = '';
    
    /** @var string */
    public $formattedPhone = '';

    /** @var int */
    public $rating = 0;

    /** @var string */
    public $postalCode = '';
    
    /** @var string */
    public $city = '';

    /** @var string */
    public $state = '';

    /** @var string */
    public $reviewsJson = '[]';

    /**
     * @param array $attributes
     * @param array $config
     */
    public function __construct(array $attributes = [], array $config = [])
    {
        foreach ($attributes as $key => $value) {
            if (property_exists($this, $key)) {
                switch ($key) {
                    case 'placeId':
                    default:
                        $this->{$key} = $value;
                }
            }
        }

        parent::__construct($config);
    }

    /** @return array<\unionco\googleservices\models\GooglePlacesReviewModel> */
    public function reviews(): array
    {
        return GooglePlacesReviewRecord::find()
            ->where(['placesRecordId' => $this->id])
            ->all();
    }
}
