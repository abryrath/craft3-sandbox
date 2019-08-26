<?php
/**
 * Union plugin for Craft CMS 3.x
 *
 * UNION.co Plugin
 *
 * @link      union.co
 * @copyright Copyright (c) 2017 UNION
 */

namespace union\core\behaviors\assets;

use yii\base\Behavior;

class BaseAssetBehavior extends Behavior
{
    const TRANSFORMS_DRIVERS = [
        'imgix' => 'union\core\services\images\ImgixService',
        'filestack' => 'union\core\services\images\FileStackService',
        'craft' => 'union\core\services\images\CraftService',
    ];

    protected static $transformsDriver = null;

    public $transformations = [];

    public function __construct()
    {
        if (self::$transformsDriver === null) {
            $transformsDriver = env('TRANSFORMS_DRIVER', 'craft');
            $driverService = self::TRANSFORMS_DRIVERS[$transformsDriver] ?? null;

            self::$transformsDriver = new $driverService();
        }
    }

    public function _crop($transform = [])
    {
        self::$transformsDriver->crop($this, $transform);

        return $this;
    }

    public function _resize($transform)
    {
        self::$transformsDriver->resize($this, $transform);

        return $this;
    }

    public function _rotate($transform)
    {
        self::$transformsDriver->rotate($this, $transform);

        return $this;
    }

    public function _url($transform = null)
    {
        return self::$transformsDriver->url($this, $transform);
    }

    public function _urlRaw(string $transform)
    {
        self::$transformsDriver->urlRaw($this, $transform);

        return $this;
    }

    public function __toString()
    {
        return self::$transformsDriver->url($this);
    }
}