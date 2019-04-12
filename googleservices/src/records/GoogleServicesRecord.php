<?php

namespace unionco\googleservices\records;

use craft\db\ActiveRecord;

class GoogleServicesRecord extends ActiveRecord
{
    /** @var string */
    public static $tableName = '{{%googleservices}}';

    /**
     * @return string
     */
    public static function tableName(): string
    {
        return static::$tableName;
    }
}
