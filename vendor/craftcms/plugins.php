<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'unionco/craft-coachmarks' => 
  array (
    'class' => 'unionco\\coachmarks\\CoachmarksPlugin',
    'basePath' => $vendorDir . '/unionco/craft-coachmarks/src',
    'handle' => 'coachmarks',
    'aliases' => 
    array (
      '@unionco/coachmarks' => $vendorDir . '/unionco/craft-coachmarks/src',
    ),
    'name' => 'Coachmarks',
    'version' => '1.0.0',
    'description' => 'Coachmarks plugin for CraftCMS.',
    'developer' => 'Franco Valdes',
    'developerUrl' => 'https://github.com/unionco',
    'documentationUrl' => 'https://github.com/fvaldes33/coacher/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/fvaldes33/coacher/master/CHANGELOG.md',
  ),
  'unionco/craft-autosuggest' => 
  array (
    'class' => 'unionco\\autosuggest\\AutosuggestPlugin',
    'basePath' => $vendorDir . '/unionco/craft-autosuggest/src',
    'handle' => 'autosuggest',
    'aliases' => 
    array (
      '@unionco/autosuggest' => $vendorDir . '/unionco/craft-autosuggest/src',
    ),
    'name' => 'AutoSuggest',
    'version' => '0.0.1',
    'description' => 'Create autosuggest fields on your site based on tags, categories, entries, etc.',
    'developer' => 'abry rath',
    'developerUrl' => 'https://github.com/abryrath',
    'documentationUrl' => 'https://github.com/abryrath/autosuggest/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/abryrath/autosuggest/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
  ),
  'unionco/craft-geolocation' => 
  array (
    'class' => 'unionco\\geolocation\\GeolocationPlugin',
    'basePath' => $vendorDir . '/unionco/craft-geolocation/src',
    'handle' => 'geolocation',
    'aliases' => 
    array (
      '@unionco/geolocation' => $vendorDir . '/unionco/craft-geolocation/src',
    ),
    'name' => 'Geolocation',
    'version' => 'dev-feature/refactor',
    'description' => 'Geolocation helper for Craft',
    'developer' => 'Abry Rath <abry.rath@union.co>',
    'developerUrl' => 'https://github.com/abryrath',
    'documentationUrl' => 'https://github.com/abryrath/geolocation/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/abryrath/geolocation/master/CHANGELOG.md',
    'hasCpSettings' => true,
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
    'version' => '3.6.4.3',
    'schemaVersion' => '3.4.2',
    'description' => 'A beautifully simple Map field type for Craft CMS 3',
    'developer' => 'Ether Creative',
    'developerUrl' => 'https://ethercreative.co.uk',
  ),
);
