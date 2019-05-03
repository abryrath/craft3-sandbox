<?php
/**
 * Union plugin for Craft CMS 3.x
 *
 * UNION.co Plugin
 *
 * @link      union.co
 * @copyright Copyright (c) 2017 UNION
 */

namespace union\core\behaviors\entries;

use Craft;
use yii\base\Behavior;

class BaseEntryBehavior extends Behavior
{
    public function _test()
    {
        return 'core - ' . get_class($this);
    }

    public function _one($field, $relatedField)
    {
        $model = clone($this->owner);

        try {
            $relatedElement = $model->{$field}[0] ?? null;

            if($relatedElement) {
                return $relatedElement->{$relatedField};
            }
        } catch(Exception $e) {}

        return null;
    }
}