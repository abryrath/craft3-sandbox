<?php

namespace union\core\services\images;

use Exception;
use union\core\behaviors\assets\BaseAssetBehavior as AssetBehavior;

class FileStackService
{
    const FILESTACK_BASE = "https://process.filestackapi.com/";

    public $transformations = [];

    /**
     * Crop
     */
    public function crop(AssetBehavior $assetBehavior, $transform = [])
    {
        $cropParams = [];
        foreach ($transform as $key => $value) {
            $cropParams[] = $value ?? 0;
        }
        $assetBehavior->transformations[] = "crop=dim:[" . implode(",", $cropParams) . "]";
    }

    /**
     * Resize
     */
    public function resize(AssetBehavior $assetBehavior, $transform)
    {
        $resizeParams = [];
        foreach ($transform as $key => $value) {
            $resizeParams[] = "{$key}:{$value}";
        }
        $assetBehavior->transformations[] = 'resize=' . implode(',', $resizeParams);
    }

    /**
     * Rotate
     */
    public function rotate(AssetBehavior $assetBehavior, $transform)
    {
        $rotateParams = [];
        foreach ($transform as $key => $value) {
            $rotateParams[] = "{$key}:{$value}";
        }
        $assetBehavior->transformations[] = "rotate=" . implode(",", $rotateParams);
    }

    /**
     * Returns the element’s full URL.
     *
     * @param array|null $transform The transform that should be applied, if any.
     * @return string|null
     */
    public function url(AssetBehavior $assetBehavior, $transform = null)
    {
        $asset = $assetBehavior->owner;

        if ($transform) {
            $transformUri = $this->generateTransform($transform);

            return "{$this->baseUrl()}{$transformUri}/{$asset->getUrl()}";
        }

        if ($assetBehavior->transformations) {
            $transformUri = implode("/", $assetBehavior->transformations);

            return "{$this->baseUrl()}{$transformUri}/{$asset->getUrl()}";
        }

        $assetBehavior->transformations = [];

        return "{$this->baseUrl()}{$asset->getUrl()}";
    }

    /**
     * Raw url
     *
     * @param transform string
     * @return string|null
     */
    public function urlRaw(AssetBehavior $assetBehavior, string $transform)
    {
        $asset = $assetBehavior->owner;

        return "{$this->baseUrl()}{$transform}/{$asset->getUrl()}";
    }

    /**
     * Resize: [
     *      width: integer,
     *      height: integer,
     *      fit: string clip|scale|max,
     *      align: left|right|center|faces|[bottom,left]|[bottom,right]|[top,left]|[top,right]
     * ]
     * Crop: [
     *      x: integer,
     *      y: integer,
     *      width: integer,
     *      height: integer
     * ]
     * Rotate: deg|exif|background
     */
    private function generateTransform($transform)
    {
        $transformations = [];

        if (isset($transform["resize"])) {
            $resizeParams = [];
            foreach ($transform["resize"] as $key => $value) {
                $resizeParams[] = "{$key}:{$value}";
            }
            $transformations[] = "resize=" . implode(",", $resizeParams);
        }

        if (isset($transform["crop"])) {
            $cropParams = [];
            foreach ($transform["crop"] as $key => $value) {
                $cropParams[] = $value ?? 0;
            }
            $transformations[] = "crop=dim:[" . implode(",", $cropParams) . "]";
        }

        if (isset($transform["rotate"])) {
            $rotateParams = [];
            foreach ($transform["rotate"] as $key => $value) {
                $rotateParams[] = "{$key}:{$value}";
            }
            $transformations[] = "rotate=" . implode(",", $rotateParams);
        }

        return implode("/", $transformations);
    }

    /**
     * Get url with api key
     *
     * @return string
     */
    private function baseUrl(): string
    {
        $apiKey = env('FILESTACK_API_KEY');

        if (!isset($apiKey)) {
            throw new Exception('Cannot use filestack without api key');
        }

        return self::FILESTACK_BASE . $apiKey . "/";
    }
}