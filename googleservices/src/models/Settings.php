<?php

namespace unionco\googleservices\models;

use craft\base\Model;

class Settings extends Model
{
    /** @var false|string */
    public $googleMapsApiKey = false;
    
    /** @var string */
    public $mapCenter = 'Charlotte, NC';

    public function __construct()
    {
        $this->googleMapsApiKey = getenv('GOOGLE_MAPS_API_KEY');
        if (!$this->googleMapsApiKey) {
            throw new \Exception('Google Maps API key is not set properly');
        }
    }

    /** @return array */
    public function rules()
    {
        return [
            [['googleMapsApiKey', 'mapCenter'], 'required'],
        ];
    }
}
