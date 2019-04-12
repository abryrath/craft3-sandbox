<?php

namespace unionco\googleservices\records;

use craft\db\ActiveRecord;

class GooglePlacesReviewRecord extends ActiveRecord
{
    /** @var string */
    public static $tableName = '{{%googleplaces_reviews}}';

    /**
     * @return string
     */
    public static function tableName(): string
    {
        return static::$tableName;
    }
}
