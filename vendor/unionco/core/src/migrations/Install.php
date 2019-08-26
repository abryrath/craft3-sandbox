<?php
/**
 * Union module for Craft CMS 3.x
 *
 * Private Union Site Module
 *
 * @link      https://union.co
 * @copyright Copyright (c) 2018 UNION
 */

namespace union\core\migrations;

use union\app\UnionModule;

use Craft;
use craft\config\DbConfig;
use craft\db\Migration;

/**
 * @author    UNION
 * @package   UnionModule
 * @since     1.0.0
 */
class Install extends Migration
{
    // Public Properties
    // =========================================================================

    /**
     * @var string The database driver to use
     */
    public $driver;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;

        if ($this->createTables()) {
            // Refresh the db schema caches
            Craft::$app->db->schema->refresh();
        }

        return true;
    }

   /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;
        $this->removeTables();

        return true;
    }

    // Protected Methods
    // =========================================================================

    /**
     * @return bool
     */
    protected function createTables()
    {
        $tablesCreated = false;

        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%log_data}}');
        if ($tableSchema === null) {
            $tablesCreated = true;
            $this->createTable(
                '{{%log_data}}',
                [
                    'id' => $this->primaryKey(),
                    'key' => $this->string(255),
                    'data' => $this->string(255),
                    'url' => $this->string(255),
                    'referer' => $this->string(255),
                    'ip_address' => $this->string(255),
                    'user_agent' => $this->string(255),
                    'pid' => $this->string(255),
                    'dateCreated' => $this->dateTime()->notNull()
                ]
            );
        }

        return $tablesCreated;
    }

    /**
     * @return void
     */
    protected function removeTables()
    {
        $this->dropTableIfExists('{{%log_data}}');
    }
}
