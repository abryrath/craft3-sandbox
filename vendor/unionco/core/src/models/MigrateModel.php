<?php

namespace union\core\models;

use Craft;

use craft\db\ActiveRecord;
use craft\db\Connection;
use PDO;

/**
 * @author    UNION
 * @package   Union
 * @since     1.0.0
 */
class MigrateModel extends ActiveRecord
{
    protected static $connection = null;
    protected static $tableName = null;

    public $additionalFields = [];

    public static function getDb()
    {
        if (static::$connection === null) {
            $host = env('DB_SERVER');
            $username = env('MIGRATE_DB_USER', env('DB_USER'));
            $password = env('MIGRATE_DB_PASSWORD', env('DB_PASSWORD'));
            $database = env('MIGRATE_DB_DATABASE');

            static::$connection = new Connection([
                'dsn' => 'mysql:host=' . $host .';' . 'dbname=' . $database,
                'username' => $username,
                'password' => $password,
                'attributes' => [
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                ],
            ]);

            static::$connection->open();
        }

        return static::$connection;
    }

    public static function populateRecord($record, $row)
    {
        parent::populateRecord($record, $row);

        foreach ($row as $name => $value) {
            if (!$record->canSetProperty($name)) {
                $record->additionalFields[$name] = $value;
            }
        }
    }

    public static function setTable($tableName)
    {
        static::$tableName = $tableName;

        return new static;
    }

    public static function tableName()
    {
        return static::$tableName;
    }
}