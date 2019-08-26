<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'craftcms/commerce' => 
  array (
    'class' => 'craft\\commerce\\Plugin',
    'basePath' => $vendorDir . '/craftcms/commerce/src',
    'handle' => 'commerce',
    'aliases' => 
    array (
      '@craft/commerce' => $vendorDir . '/craftcms/commerce/src',
    ),
    'name' => 'Craft Commerce',
    'version' => '2.1.2',
    'description' => 'An amazingly powerful and flexible e-commerce platform for Craft CMS.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://craftcommerce.com',
    'documentationUrl' => 'https://docs.craftcms.com/commerce/v2/',
  ),
  'ether/simplemap' => 
  array (
    'class' => 'ether\\simplemap\\SimpleMap',
    'basePath' => $vendorDir . '/ether/simplemap/src',
    'handle' => 'simplemap',
    'aliases' => 
    array (
      '@ether/simplemap' => $vendorDir . '/ether/simplemap/src',
    ),
    'name' => 'Maps',
    'version' => '3.4.11',
    'schemaVersion' => '3.4.1',
    'description' => 'A beautifully simple Map field type for Craft CMS 3',
    'developer' => 'Ether Creative',
    'developerUrl' => 'https://ethercreative.co.uk',
  ),
  'unionco/craft-sync-db' => 
  array (
    'class' => 'unionco\\craftsyncdb\\SyncDbPlugin',
    'basePath' => $vendorDir . '/unionco/craft-sync-db/src',
    'handle' => 'sync-db',
    'aliases' => 
    array (
      '@unionco/craftsyncdb' => $vendorDir . '/unionco/craft-sync-db/src',
    ),
    'name' => 'SyncDb',
    'version' => 'dev-master',
    'description' => 'Craft 3 plugin to sync database across environments',
    'developer' => 'Abry Rath<abryrath@gmail.com>',
    'developerUrl' => 'https://github.com/unionco',
    'documentationUrl' => 'https://github.com/unionco/craft-sync-db',
    'changelogUrl' => '???',
    'hasCpSettings' => true,
    'hasCpSection' => false,
    'components' => 
    array (
      'sync' => 'unionco\\craftsyncdb\\services\\Sync',
    ),
  ),
  'unionco/craft-related-entry-types' => 
  array (
    'class' => 'unionco\\relatedentrytypes\\RelatedEntryTypesPlugin',
    'basePath' => $vendorDir . '/unionco/craft-related-entry-types/src',
    'handle' => 'related-entry-types',
    'aliases' => 
    array (
      '@unionco/relatedentrytypes' => $vendorDir . '/unionco/craft-related-entry-types/src',
    ),
    'name' => 'Related Entry Types',
    'version' => 'dev-master',
    'description' => 'A Craft Field type that allows more control over related entries.',
    'developer' => 'Abry Rath <abry.rath@union.co>',
    'developerUrl' => 'https://github.com/unionco',
    'documentationUrl' => 'https://github.com/unionco/related-entry-types/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/unionco/related-entry-types/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
  ),
);
