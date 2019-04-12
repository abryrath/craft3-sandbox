<?php

namespace unionco\googleservices\migrations;

use craft\db\Migration;
use unionco\googleservices\records\GooglePlacesReviewRecord;
use unionco\googleservices\records\GoogleServicesRecord;

class Install extends Migration
{
    /** @var return bool */
    public function safeUp()
    {
        if (!$this->db->getTableSchema(GoogleServicesRecord::$tableName, true)) {
            $this->createTable(
                GoogleServicesRecord::$tableName,
                [
                    'id' => $this->primaryKey(),
                    'ownerId' => $this->integer()->notNull(),
                    'ownerSiteId' => $this->integer()->notNull(),
                    'fieldId' => $this->integer()->notNull(),

                    'city' => $this->string(),
                    'state' => $this->string()->notNull(),
                    'postalCode' => $this->string()->notNull(),
                    'formattedAddress' => $this->text(),
                    'formattedPhone' => $this->string(),
                    'latitude' => $this->float()->notNull(),
                    'longitude' => $this->float()->notNull(),

                    // Places
                    'placeId' => $this->string(),
                    'rating' => $this->float(),

                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid()->notNull(),
                ]
            );

            $this->createIndex(
                null,
                GoogleServicesRecord::$tableName,
                ['ownerId', 'ownerSiteId', 'fieldId'],
                true
            );

            $this->addForeignKey(
                null,
                GoogleServicesRecord::$tableName,
                ['ownerId'],
                '{{%elements}}',
                ['id'],
                'CASCADE',
                null
            );

            $this->addForeignKey(
                null,
                GoogleServicesRecord::$tableName,
                ['ownerSiteId'],
                '{{%sites}}',
                ['id'],
                'CASCADE',
                'CASCADE'
            );
            $this->addForeignKey(
                null,
                GoogleServicesRecord::$tableName,
                ['fieldId'],
                '{{%fields}}',
                ['id'],
                'CASCADE',
                'CASCADE'
            );
        }

        if (!$this->db->getTableSchema(GooglePlacesReviewRecord::$tableName, true)) {
            $this->createTable(
                GooglePlacesReviewRecord::$tableName,
                [
                    'id' => $this->primaryKey(),
                    'placesRecordId' => $this->integer()->notNull(),

                    'authorName' => $this->string()->notNull(),
                    'profilePhotoUrl' => $this->string(),
                    'text' => $this->text()->notNull(),
                    'rating' => $this->float()->notNull(),
                    'relativeTimeDescription' => $this->string(),

                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid()->notNull(),
                ]
            );

            $this->addForeignKey(
                null,
                GooglePlacesReviewRecord::$tableName,
                ['placesRecordId'],
                GoogleServicesRecord::$tableName,
                ['id'],
                'CASCADE',
                null
            );
        }

        return true;
    }

    /** @return bool */
    public function safeDown()
    {
        $this->dropTableIfExists(GooglePlacesReviewRecord::$tableName);
        $this->dropTableIfExists(GoogleServicesRecord::$tableName);

        return true;
    }
}
