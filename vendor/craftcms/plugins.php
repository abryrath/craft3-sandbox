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
);
