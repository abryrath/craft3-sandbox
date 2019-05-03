<?php

namespace union\core\services;

use Craft;
use craft\base\Component;
use craft\helpers\FileHelper;
use craft\helpers\StringHelper;
use GuzzleHttp\Client;
use Exception;
use craft\utilities\ClearCaches;
use union\core\UnionModule;

class MigrateService extends Component
{
    /**
     *
     */
    const SQL_DUMP_FILE_NAME = 'database_dump.sql';

    /**
     *
     */
    const SQL_DUMP_FILE_NAME_ZIP = 'database_dump.sql.zip';

    /**
     * @var
     */
    protected $remotes = [];

    /**
     * @var
     */
    protected $remote;

    // Public Methods
    // =========================================================================

    /**
     * Instantiate service
     *
     * @return void
     */
    public function __construct() 
    {
        $this->remotes = UnionModule::$instance->getSettings()->remotes;

        $this->ensureBackupPath();
    }

    /**
     * Full sync process
     *
     * @return void
     */
    public function sync($logger, $environment)
    {
        // bail if no remotes configured
        if (!isset($this->remotes[$environment])) {
            $logger->log('No remotes configured');
            exit();
        }

        // Set remote to connect to
        $this->remote = $this->remotes[$environment];

        Craft::$app->enableMaintenanceMode();

        // backup remote db and zip it
        $logger->log('Beginning Remote Dump');
        $this->createBackup();
        $logger->log('Remote Dump Completed');

        // download zip
        $logger->log('Downloading remote file');
        $this->downloadBackup();
        $logger->log('Remote Download Completed');

        // restore local
        $logger->log('Restoring local database');
        $result = $this->restoreDatabase();
        $logger->log($result);

        // clean up
        $this->exec('rm ' . $this->generateFilePath(static::SQL_DUMP_FILE_NAME));
        $this->exec('rm ' . $this->generateFilePath(static::SQL_DUMP_FILE_NAME_ZIP));
        
        // clea cache
        $this->clearCache();

        // complete
        $logger->log('Migration Complete');

        Craft::$app->disableMaintenanceMode();
    }

    /**
     * Generate a dump of the db and zip it
     *
     * @return void
     */
    public function dumpMySql()
    {
        try {
            $fileName = $this->generateFilePath(static::SQL_DUMP_FILE_NAME);
            Craft::$app->getDb()->backupTo($fileName);
            $this->zip();
        } catch (Exception $e) {
            throw new Exception($e->getMessage(), 1);
            return false;            
        }

        return true;
    }


    // Protected Methods
    // =========================================================================

    /**
     * Backup and Zip remote
     *
     * @return void
     */
    protected function createBackup()
    {
        $connect = $this->remoteConnection();
        $execRemoteDump = $connect . ' ' . $this->remote['phpPath'] . ' ' . $this->remote['root'] . '/craft core/backup';
        $this->exec($execRemoteDump);
    }

    /**
     * Download Backup and unzip it
     *
     * @return void
     */
    protected function downloadBackup()
    {
        // download
        $remoteZipPath = $this->remote['backupDirectory'] . static::SQL_DUMP_FILE_NAME_ZIP;
        $downloadCommand = 'scp -P ' . $this->remote['port'] . ' ' . $this->remote['username'] . '@' . $this->remote['host'] . ':' . $remoteZipPath . ' ' . $this->generateFilePath(static::SQL_DUMP_FILE_NAME_ZIP);
        $this->exec($downloadCommand);
        
        // delete remote
        $connect = $this->remoteConnection();
        $this->exec($connect . ' rm ' . $remoteZipPath);

        // unzip
        $unzip = 'unzip ' . $this->generateFilePath(static::SQL_DUMP_FILE_NAME_ZIP) . ' -d ' . $this->generateFilePath();
        $this->exec($unzip);
    }

    /**
     * Restores the database.
     *
     * @return string
     */
    protected function restoreDatabase(): string
    {
        try {
            $fileName = $this->generateFilePath(static::SQL_DUMP_FILE_NAME);
            $db = Craft::$app->getDb();
            $schema = $db->getSchema();
            $restoreCommand = $schema->getDefaultRestoreCommand();

            $dbConfig = Craft::$app->getConfig()->getDb();
            $tokens = [
                'mysqldump' => 'mysql',
                '{file}' => $fileName,
                '{port}' => $dbConfig->port,
                '{server}' => $dbConfig->server,
                '{user}' => $dbConfig->user,
                '{database}' => $dbConfig->database,
                '{schema}' => $dbConfig->schema,
            ];

            $command = str_replace(array_keys($tokens), array_values($tokens), $restoreCommand);
            $this->exec($command);
        } catch (\Throwable $e) {
            Craft::error('Error restoring up the database: '.$e->getMessage(), __METHOD__);
        
            return 'Couldn’t restore the database';
        }

        // Nuke any temp connection files that might have been created.
        FileHelper::clearDirectory(Craft::$app->getPath()->getTempPath());
        
        return 'The database was restored successfully.';
    }

    // Private Methods
    // =========================================================================

    private function clearCache()
    {
        $pathService = Craft::$app->getPath();
        $pathService->getCompiledTemplatesPath(false);
        $compiledClassesPath = $pathService->getCompiledClassesPath();
        FileHelper::clearDirectory($compiledClassesPath);
        Craft::$app->getTemplateCaches()->deleteAllCaches();
    }

    private function ensureBackupPath()
    {
        $backupPath = Craft::$app->getPath()->getDbBackupPath();

        if (!file_exists($backupPath)) {
            mkdir($backupPath, 0777, true);
        }
    }

    /**
     * Execute command quietly
     *
     * @return string
     */
    private function exec($cmd)
    {
        shell_exec($cmd . ' 2>&1');
    }

    /**
     * Generate file path
     *
     * @return string
     */
    private function generateFilePath($path = null): string
    {
        if ($path) {
            return Craft::$app->getPath()->getDbBackupPath().'/'.$path;    
        }
        return Craft::$app->getPath()->getDbBackupPath();
    }

    /**
     * Connection ssh command
     *
     * @return string
     */
    private function remoteConnection(): string
    {
        return 'ssh ' . $this->remote['username'] . '@' . $this->remote['host'] . ' -p ' . $this->remote['port'];
    }

    /**
     * Zip file
     *
     * @return string
     */
    private function zip()
    {
        $sqlDumpPath = $this->generateFilePath(static::SQL_DUMP_FILE_NAME);
        $zipDumpPath = $this->generateFilePath(static::SQL_DUMP_FILE_NAME_ZIP);

        $execZip = "zip -j {$zipDumpPath} {$sqlDumpPath};";
        $this->exec($execZip);

        $execRm = "rm {$sqlDumpPath}";
        $this->exec($execRm);
    }
}