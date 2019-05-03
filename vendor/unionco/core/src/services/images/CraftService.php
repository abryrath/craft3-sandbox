<?php
namespace union\core\services\images;

use union\core\behaviors\assets\BaseAssetBehavior as AssetBehavior;
class CraftService
{
    public function __call($name, array $args)
    {
        return $this;
    }

    public function url(AssetBehavior $assetBehavior, $transform)
    {
        return $assetBehavior->owner->getUrl($transform);
    }
}