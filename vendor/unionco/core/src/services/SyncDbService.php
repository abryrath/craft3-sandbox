<?php
/**
 * Union plugin for Craft CMS 3.x
 *
 * UNION.co Plugin
 *
 * @link      union.co
 * @copyright Copyright (c) 2017 UNION
 */
namespace union\core\services;

use Craft;
use craft\base\Component;
use union\core\UnionModule;

/**
 * SyncDbService Service
 *
 * All of your plugin�s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other plugins can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    UNION
 * @package   Union
 * @since     1.0.1
 */
class SyncDbService extends Component
{
    const BACKUP_DIRECTORY = 'backups/databases/';
    const SQL_DUMP_FILE_NAME = 'database_dump.sql';
    const SQL_DUMP_FILE_NAME_ZIP = 'database_dump.sql.zip';

    /**
     * @var behaviors array
     */
    private $remotes = [];

    /**
     *  Init new behavior service
     *
     * @return void
     */
    public function __construct()
    {
        $this->remotes = UnionModule::$instance->getSettings()->remotes;
    }

    public function dumpMysql()
    {
        $this->ensureBackupPath();

        // dump mysql
        $execSqlDump = env('MYSQL_DUMP_PATH') . ' -h ' . env('DB_SERVER') . ' -P ' . env('DB_PORT') . ' -u ' . env('DB_USER') . " --password='" . env('DB_PASSWORD') . "' " . env('DB_DATABASE') . ' > ' . $this->sqlDumpPath(static::SQL_DUMP_FILE_NAME) . ' ; ';
        $this->exec($execSqlDump);

        // zip mysql
        $execZip = 'zip -j ' . $this->sqlDumpPath(static::SQL_DUMP_FILE_NAME_ZIP) . ' ' . $this->sqlDumpPath(static::SQL_DUMP_FILE_NAME) . ' ;';
        $this->exec($execZip);

        // remove non-zipped mysql
        $execRm = 'rm ' . $this->sqlDumpPath(static::SQL_DUMP_FILE_NAME);
        $this->exec($execRm);
    }

    public function sync($logger, $environment = 'production')
    {
        if (!isset($this->remotes)) {
            $logger->log('No remotes configured');
            return;
        }

        $this->ensureBackupPath();
        $remote = $this->remotes[$environment];

        $logger->log('Beginning Remote Dump...');

        $remoteSqlDumpStartTime = microtime(true);

        $execRemoteSsh = 'ssh ' . $remote['username'] . '@' . $remote['host'] . ' -p ' . $remote['port'];
        $execRemoteDump = $execRemoteSsh . ' ' . $remote['phpPath'] . ' ' . $remote['root'] . '/craft core/dumpmysql';

        $result = $this->exec($execRemoteDump);

        $remoteSqlDumpEndTime = microtime(true);

        $logger->log('Remote Dump Completed in ' . number_format(($remoteSqlDumpEndTime - $remoteSqlDumpStartTime), 2) . ' seconds.');
        $logger->log('Downloading Remote File...');

        $downloadStartTime = microtime(true);

        sleep(1);

        $remoteZipPath = $remote['backupDirectory'] . static::SQL_DUMP_FILE_NAME_ZIP;
        $downloadCommand = 'scp -P ' . $remote['port'] . ' ' . $remote['username'] . '@' . $remote['host'] . ':' . $remoteZipPath . ' ' . $this->sqlDumpPath(static::SQL_DUMP_FILE_NAME_ZIP);

        $result = $this->exec($downloadCommand);

        $downloadEndTime = microtime(true);

        $logger->log('Remote Download Completed in ' . number_format(($downloadEndTime - $downloadStartTime), 2) . ' seconds.');

        sleep(1);

        // delete remote file
        $this->exec($execRemoteSsh . ' rm ' . $remoteZipPath);

        $logger->log('Remote File Deleted');

        $this->exec('unzip ' . $this->sqlDumpPath(static::SQL_DUMP_FILE_NAME_ZIP) . ' -d ' . $this->sqlDumpPath());
        $this->exec('mysql -u ' . env('DB_USER') . ' -h ' . env('DB_SERVER') . ' -P ' . env('DB_PORT') . " --password='" . env('DB_PASSWORD') . "' " . env('DB_DATABASE') . ' < ' . $this->sqlDumpPath(static::SQL_DUMP_FILE_NAME));

        $logger->log('Local Dump Complete');

        // delete sql file
        $this->exec('rm ' . $this->sqlDumpPath(static::SQL_DUMP_FILE_NAME));

        // delete zip file
        $this->exec('rm ' . $this->sqlDumpPath(static::SQL_DUMP_FILE_NAME_ZIP));

        $logger->log('Local Files Deleted');

        // craft()->templateCache->deleteAllCaches();
        // craft()->cache->flush();

        $logger->log('Caches Cleared');
    }

    protected function ensureBackupPath()
    {
        $backupPath = $this->sqlDumpPath();

        if (!file_exists($backupPath)) {
            mkdir($backupPath, 0777, true);
        }
    }

    protected function sqlDumpPath($file = null)
    {
        if ($file) {
            return storage_path(static::BACKUP_DIRECTORY . $file);
        }

        return storage_path(static::BACKUP_DIRECTORY);
    }

    protected function exec($cmd)
    {
        shell_exec($cmd . ' 2>&1');
    }
}
