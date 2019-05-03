<?php

namespace union\core\services\images;

use Exception;
use union\core\behaviors\assets\BaseAssetBehavior as AssetBehavior;

class ImgixService
{
    private static $baseUrl;

    public function auto(AssetBehavior $assetBehavior, string $mode = '')
    {
        $assetBehavior->transformations['auto'] = $mode;
    }

    public function crop(AssetBehavior $assetBehavior, $transform = [])
    {
        $assetBehavior->transformations['fit'] = 'crop';
        $assetBehavior->transformations['auto'] = $transform['auto'] ?? 'format,enhance';
        $assetBehavior->transformations['q'] = $transform['q'] ?? 80;

        if (!empty($transform['crop'])) {
            $assetBehavior->transformations['crop'] = $transform['crop'];
        }
    }

    public function resize(AssetBehavior $assetBehavior, $transform)
    {
        $height = $transform['h'] ?? $transform['height'] ?? null;
        $width = $transform['w'] ?? $transform['width'] ?? null;

        $height && $assetBehavior->transformations['h'] = $height;
        $width && $assetBehavior->transformations['w'] = $width;
    }

    public function rotate(AssetBehavior $assetBehavior, $transform)
    {
        $assetBehavior->transformations['rot'] = $transform;
    }

    /**
     * Returns the element’s full URL.
     *
     * @param array|null $transform The transform that should be applied, if any.
     * @return string|null
     */
    public function url(AssetBehavior $assetBehavior, $transform = null)
    {
        // if this is a dummy asset, return normal url
        $owner = $assetBehavior->owner;

        if ($owner->dummyUrl ?? null) {
            return $owner->url;
        }

        $width = $transform['width'] ?? $transform['w'] ?? null;
        $height = $transform['height'] ?? $transform['h'] ?? null;

        if ($width) {
            $this->resize($assetBehavior, ['width' => $width]);
        }

        if ($height) {
            $this->resize($assetBehavior, ['height' => $height]);
        }

        $queryString = $this->generateTransform($assetBehavior->transformations);

        $assetBehavior->transformations = [];
        $asset = $assetBehavior->owner;

        if (!$queryString) {
            return $this->baseUrl() . $asset->getPath();
        }

        return $this->baseUrl() . "{$asset->getPath()}?{$queryString}";
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

        return $this->baseUrl() . "{$transform}/{$asset->getUrl()}";
    }

    private function baseUrl()
    {
        if (self::$baseUrl === null) {
            $baseUrl = env('IMGIX_BASE_URL');

            if (!$baseUrl) {
                throw new Exception("You must set 'IMGIX_BASE_URL' in .env");
            }

            self::$baseUrl = env('IMGIX_BASE_URL');
        }

        return self::$baseUrl;
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
        return http_build_query($transform);
    }
}
