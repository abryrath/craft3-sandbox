<?php

use Symfony\Component\Console\Output\Output;
use unionco\craftsyncdb\services\CpService;

/**
 *  This is the default configuration that will be copied into your Craft
 *  config path, if it does not exist. Any changes to this file will be
 *  overwritten
 **/

return [
    'globals' => [
        'ignoredTables' => [
            'craft_templatecaches',
        ],
    ],
    'remotes' => [
        'production' => [
            'username' => 'abry',
            'host' => 'abryrath.com',
            'root' => '/home/abry/Sites/craft3-sandbox/',
            'backupDirectory' => '/home/abry/Sites/craft3-sandbox/storage/backups/databases/',
            'port' => 22,
            'phpPath' => '/usr/bin/php',
            'mysqlDumpPath' => '/usr/bin/mysqldump',
            'environment' => CpService::ENV_PRODUCTION,
            'verbosity' => Output::VERBOSITY_NORMAL, //DEBUG,
        ],
        'staging' => [
            'username' => 'user',
            'host' => 'staging.example.com',
            'root' => '/path/to/project/',
            'backupDirectory' => '/path/to/project/storage/backups/databases/',
            'port' => 22,
            'phpPath' => '/usr/local/bin/php',
            'mysqlDumpPath' => '/usr/bin/mysqldump',
            'environment' => CpService::ENV_STAGING,
            'verbosity' => Output::VERBOSITY_VERY_VERBOSE,
        ],
    ],
];
