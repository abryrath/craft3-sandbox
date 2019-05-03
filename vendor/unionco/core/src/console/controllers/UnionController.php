<?php
/**
 * Union plugin for Craft CMS 3.x
 *
 * UNION.co Plugin
 *
 * @link      union.co
 * @copyright Copyright (c) 2017 UNION
 */

namespace union\core\console\controllers;

use Craft;
use union\core\UnionModule;
use union\core\migrations\Install;
use yii\console\Controller;
use yii\helpers\Console;

/**
 * Union Command
 *
 * The first line of this class docblock is displayed as the description
 * of the Console Command in ./craft help
 *
 * Craft can be invoked via commandline console by using the `./craft` command
 * from the project root.
 *
 * Console Commands are just controllers that are invoked to handle console
 * actions. The segment routing is plugin/controller-name/action-name
 *
 * The actionIndex() method is what is executed if no sub-commands are supplied, e.g.:
 *
 * ./craft union/union
 *
 * Actions must be in 'kebab-case' so actionDoSomething() maps to 'do-something',
 * and would be invoked via:
 *
 * ./craft union/union/do-something
 *
 * @author    UNION
 * @package   Union
 * @since     1.0.1
 */
class UnionController extends Controller
{
    /**
     * Install module
     */
    public function actionInstall()
    {
        $migration = new Install();
        $migration->safeUp();
    }   

    /**
     * Migrate database from prod/staging env
     *
     * @return mixed
     */
    public function actionMigrate($environment = 'production')
    {
        $logger = new class($this) {
            protected $console;
            protected $levels = [
                'info' => CONSOLE::FG_GREEN,
                'error' => CONSOLE::FG_RED,
                'normal' => CONSOLE::FG_YELLOW,
            ];

            public function __construct($console)
            {
                $this->console = $console;
            }

            public function log($text, $level = 'normal')
            {
                $this->console->stdout($text, $this->levels[$level]);
                $this->console->stdout(PHP_EOL);
            }
        };

        UnionModule::$instance->migrate->sync($logger, $environment);
    }
    
    /**
     * Backup the database.
     *
     * @return string
     */
    public function actionBackup()
    {
        try {
            $result = UnionModule::$instance->migrate->dumpMySql();

            if (!$result) {
                return $this->stderr('There was a problem backing up your database.');    
            }   
        } catch (Exception $e) {
            return $this->stderr('Error: ' . $e->getMessage() . ' ' . $e->getLine());
        }

        return $this->stdout('The database was backed up successfully.');
    }
    
    /**
     * SyncDb database from prod/staging env
     *
     * @return mixed
     */
    public function actionSyncdb($environment = 'production')
    {
        $logger = new class($this) {
            protected $console;
            protected $levels = [
                'info' => CONSOLE::FG_GREEN,
                'error' => CONSOLE::FG_RED,
                'normal' => CONSOLE::FG_YELLOW,
            ];

            public function __construct($console)
            {
                $this->console = $console;
            }

            public function log($text, $level = 'normal')
            {
                $this->console->stdout($text, $this->levels[$level]);
                $this->console->stdout(PHP_EOL);
            }
        };

        union('syncdb')->sync($logger, $environment);
    }

    /**
     * Backup db
     *
     * @return mixed
     */
    public function actionDumpmysql()
    {
        union('syncdb')->dumpMysql();
    }
}
