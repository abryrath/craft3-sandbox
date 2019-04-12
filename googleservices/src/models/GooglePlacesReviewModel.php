<?php

namespace unionco\googleservices\models;

use craft\base\Model;

class GooglePlacesReviewModel extends Model
{
    /** @var int */
    public $placesRecordId = 0;

    /** @var string */
    public $authorName = '';

    /** @var string */
    public $profilePhotoUrl = '';

    /** @var string */
    public $text = '';

    /** @var int */
    public $rating = 0;

    /** @var string */
    public $relativeTimeDescription = '';
    

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
}
