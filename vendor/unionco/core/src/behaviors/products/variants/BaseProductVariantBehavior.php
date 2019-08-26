<?php

namespace union\core\behaviors\products\variants;

use yii\base\Behavior;
use craft\commerce\elements\Product;

class BaseProductVariantBehavior extends Behavior
{
    public function _test(): string
    {
        return "BaseProductVariantBehavior test";
    }

    public function _product(): Product
    {
        return $this->owner->getProduct();
    }
}