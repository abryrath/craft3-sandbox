<?php

namespace union\core\services;

use Craft;
use NumberFormatter;

class UtilService
{
    public $googleApiKey = null;

    public function altText($criteria, $transform = null, $default = null)
    {
        if ($criteria) {
            try {
                $asset = $criteria[0] ?? null;

                if ($asset) {
                    return $asset->title ?? $asset->filename;
                }
            } catch(Exception $e) {
                //
            }
        }

        return $default;
    }

    public function assetUrl($criteria, $transform = null, $default = null)
    {
        if ($criteria) {
            try {
                $asset = $criteria[0] ?? null;

                if ($asset) {
                    return $asset->getUrl($transform) . '?v=' . $asset->dateModified->format('Y-m-d_H-i-s');
                }
            } catch(Exception $e) {
                //
            }
        }

        return $default;
    }

    public function bodyClass($context)
    {
        $templateClasses = 'Page';

        if (! empty($context['templateName'])) {
            $tmpClasses = explode('--', $context['templateName']);

            foreach ($tmpClasses as $tmpClass) {
                $parts = explode(' ', $templateClasses);

                $templateClasses = $templateClasses . ' ' . array_pop($parts) . '--' . $tmpClass;
            }
        }

        // if dev wants to bypass convention and just add a specific string
        $bodyClass = $context['bodyClass'] ?? null;

        if ($bodyClass) {
            $templateClasses .= ' ' . $bodyClass;
        }

        return $templateClasses;
    }

    public function clearCache()
    {
        craft()->cache->flush();
    }

    public function clearTemplateCache()
    {
        craft()->templateCache->deleteAllCaches();
    }

    public function config($key)
    {
        return config($key);
    }

    public function date($format = 'm/Y/d')
    {
        return date($format);
    }

    public function env($key, $default = null)
    {
        return env($key, $default);
    }

    public function file($path)
    {
        $realPath = realpath(env('BASE_PATH', CRAFT_BASE_PATH) . '/' . trim($path, '/'));

        return file_get_contents($realPath);
    }

    public function flashData($key, $default = null)
    {
        return craft()->userSession->getFlash($key, $default);
    }

    public function formatDate($date = null, $dateFormat = 'm/Y/d')
    {
        if ($date) {
            if (is_string($date)) {
                $date = new DateTime($date);
            }

            return ampm($date->format($dateFormat));
        }

        return $date;
    }

    public function logData($key, $data)
    {
        log_data($key, print_r($data, true));
    }

    public function opcacheReset()
    {
        opcache_reset();
    }

    public function ordinal($num)
    {
        $numberFormatter = new NumberFormatter('en_US', NumberFormatter::SPELLOUT);
        $numberFormatter->setTextAttribute(NumberFormatter::DEFAULT_RULESET, '%spellout-ordinal');

        return $numberFormatter->format($num);
    }

    public function request($key = null, $default = null)
    {
        return request($key, $default);
    }

    public function setting($key)
    {
        return constant('Union\Enum\Settings::' . $key);
    }

    public function shouldExcludeRobots()
    {
        $nonProdEnvironments = [
            'dev',
            'development',
            'local',
            'qa',
            'staging',
        ];

        // disallow non-prod environments
        $env = env('APP_ENV') ?? env('ENVIRONMENT') ?? 'production';

        if (in_array($env, $nonProdEnvironments)) {
            return true;
        }

        // default to allowing robots
        return false;
    }

    public function sproutChecked($handle, $field, $index)
    {
        $requestParams = $_REQUEST ?? [];
        $sproutFields = $requestParams['fields'] ?? [];

        if ($sproutFields) {
            $submittedFieldValue = $sproutFields[$handle][$index] ?? null;

            if ($submittedFieldValue) {
                if ($submittedFieldValue == $field['value']) {
                    return 'checked="checked"';
                }

                return null;
            } else {
                return null;
            }
        }

        return $field['default'] ? 'checked="checked"' : null;
    }

    public function sproutLightswitchValue($field, $submittedEntry)
    {
        $requestParams = $_REQUEST ?? [];
        $sproutFields = $requestParams['fields'] ?? [];

        if ($sproutFields) {
            if ($submittedEntry === true) {
                return 'checked="checked"';
            }

            return null;
        }

        $isDefault = !! $field->settings['default'];

        return $isDefault ? 'checked="checked"' : '';
    }

    public function svg($path, $classes = [])
    {
        ! is_array($classes) && $classes = (array) $classes;

        $svgPath = realpath(config('public_path') . '/' . trim($path, '/'));

        ob_start(); ?>
            <div class="Svg-compat <?=implode(' ', $classes)?>">
                <div class="Svg-compat-inner">
                    <img class="Svg-compat-img" src="<?=asset($path)?>" />
                    <?=file_get_contents($svgPath) ?>
                </div>
            </div>
        <?php return ob_get_clean();
    }

    public function telLink($phoneNumber)
    {
        $phoneNumber = str_replace(['.', '-', '(', ')', ' '], '', $phoneNumber);

        return '+1' . str_replace('x', ',', $phoneNumber);
    }

    public function toHierarchy($collection)
    {
        // get collection from database
        $collection = $this->collection($collection);

        // initialize return array
        $nestedSet = [];

        $addDirectChildren = function($parent) use(&$addDirectChildren, &$collection, &$childNodeIds, $nestedSet) {
            $children = [];

            foreach ($collection as $index => &$item) {
                if (($item->lft > $parent->lft) && ($item->rgt < $parent->rgt) && ($item->level - $parent->level == 1) )  {
                    $children[] = $item;

                    if ($item->rgt - $item->lft > 1) {
                        $item->children = $addDirectChildren($item);

                        unset($collection[$index]);
                    }
                }
            }

            return $children;
        };

        // create root
        $rgt = 0;

        foreach ($collection as $model) {
            $rgt = $model->rgt > $rgt ? $model->rgt : $rgt;
        }

        $rootNode = (object) ['lft' => 1, 'rgt' => $rgt + 1, 'level' => 0];

        // create nested set
        $nestedSet = $addDirectChildren($rootNode);

        return $nestedSet;
    }

    public function verifyBugsnag()
    {
        throw new Exception('Testing Bugsnag: ' . env('APP_ENV'));
    }
}