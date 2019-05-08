<?php

$vendorDir = dirname(__DIR__);

return array (
  'unionco/import' => 
  array (
    'class' => 'unionco\\import\\Import',
    'basePath' => $vendorDir . '/unionco/import/src',
    'handle' => 'import',
    'aliases' => 
    array (
      '@unionco/import' => $vendorDir . '/unionco/import/src',
    ),
    'name' => 'Import',
    'version' => 'dev-master',
    'description' => 'Import data from a Craft 2 JSON export file',
    'developer' => 'UNION',
    'developerUrl' => 'https://bitbucket.org/unionco',
    'changelogUrl' => 'https://raw.githubusercontent.com/x/import/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
    'components' => 
    array (
      'entry' => 'unionco\\import\\services\\Entry',
    ),
  ),
  'unionco/google-services' => 
  array (
    'class' => 'unionco\\googleservices\\GoogleServices',
    'basePath' => $vendorDir . '/unionco/google-services/src',
    'handle' => 'google-services',
    'aliases' => 
    array (
      '@unionco/googleservices' => $vendorDir . '/unionco/google-services/src',
    ),
    'name' => 'Google Services',
    'version' => 'dev-master',
    'description' => 'Google Places API Integration',
    'developer' => 'Abry Rath <abry.rath@union.co>',
    'developerUrl' => 'https://github.com/unionco',
    'documentationUrl' => 'https://github.com/unionco/google-services/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/unionco/google-services/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
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
    'developerEmail' => 'help@ethercreative.co.uk',
    'documentationUrl' => 'https://github.com/ethercreative/simplemap',
  ),
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
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://docs.craftcms.com/commerce/v2/',
  ),
  'unionco/geolocation' => 
  array (
    'class' => 'unionco\\geolocation\\GeolocationPlugin',
    'basePath' => $vendorDir . '/unionco/geolocation/src',
    'handle' => 'geolocation',
    'aliases' => 
    array (
      '@unionco/geolocation' => $vendorDir . '/unionco/geolocation/src',
    ),
    'name' => 'Geolocation',
    'version' => '9999999-dev',
    'description' => 'Geolocation helper for Craft',
    'developer' => 'Abry Rath <abry.rath@union.co>',
    'developerUrl' => 'https://github.com/abryrath',
    'documentationUrl' => 'https://github.com/abryrath/geolocation/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/abryrath/geolocation/master/CHANGELOG.md',
    'hasCpSettings' => true,
    'hasCpSection' => false,
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
    'changelogUrl' => 'https://raw.githubusercontent.com/unionco/related-entry-types/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
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
    'hasCpSettings' => false,
    'hasCpSection' => false,
    'components' => 
    array (
      'sync' => 'unionco\\craftsyncdb\\services\\Sync',
    ),
  ),
);
