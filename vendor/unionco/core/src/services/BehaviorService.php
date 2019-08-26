<?php
namespace union\core\services;

use Craft;
use craft\base\Component;
use craft\commerce\elements\Order;
use craft\commerce\elements\Product;
use craft\commerce\elements\Variant;
use craft\elements\Asset;
use craft\elements\Category;
use craft\elements\Entry;
use craft\elements\GlobalSet;
use craft\elements\MatrixBlock;
use craft\elements\Tag;
use craft\elements\User;
use yii\base\Event;

class BehaviorService extends Component
{
    /**
     * @var baseBehaviorNamespace string
     */
    protected static $baseBehaviorNamespace = 'union\\core\\behaviors\\';

    /**
     * @var behaviors string
     */
    protected $extraBehaviorNamespace = 'union\\app\\behaviors\\';

    /**
     *  Listen to all possible element event init
     *
     *  @return void
     */
    public function listen()
    {
        Event::on(
            Asset::class,
            Asset::EVENT_INIT,
            function (Event $event) {
                // attach stuff here
                $this->register($event);
            }
        );

        Event::on(
            Category::class,
            Category::EVENT_INIT,
            function (Event $event) {
                // attach stuff here
                $this->register($event);
            }
        );

        Event::on(
            Entry::class,
            Entry::EVENT_INIT,
            function (Event $event) {
                // attach stuff here
                $this->register($event);
            }
        );

        Event::on(
            GlobalSet::class,
            GlobalSet::EVENT_INIT,
            function (Event $event) {
                // attach stuff here
                $this->register($event);
            }
        );

        Event::on(
            MatrixBlock::class,
            MatrixBlock::EVENT_INIT,
            function (Event $event) {
                // attach stuff here
                $this->register($event);
            }
        );

        Event::on(
            Tag::class,
            Tag::EVENT_INIT,
            function (Event $event) {
                // attach stuff here
                $this->register($event);
            }
        );

        Event::on(
            User::class,
            User::EVENT_INIT,
            function (Event $event) {
                // attach stuff here
                $this->register($event);
            }
        );

        // Only proceed if Craft Commerce is enabled
        if (Craft::$app->plugins->isPluginEnabled('commerce')) {
            Event::on(
                Product::class,
                Product::EVENT_INIT,
                function (Event $event) {
                    $this->register($event);
                }
            );

            Event::on(
                Variant::class,
                Variant::EVENT_INIT,
                function (Event $event) {
                    $this->register($event);
                }
            );

            Event::on(
                Order::class,
                Order::EVENT_INIT,
                function (Event $event) {
                    $this->register($event);
                }
            );
        }
    }

    /**
     *  Register all behaviors
     *
     *  @param event array
     *  @return mixed
     */
    public function register($event)
    {
        $element = $event->sender;
        $elementType = $element->refHandle();

        if ($elementType == null) {
            $elementType = $element->className();
        }

        switch ($elementType) {
            case 'asset':
                $behaviorBaseClass = static::$baseBehaviorNamespace . 'assets\\BaseAssetBehavior';
                $element->attachBehavior('assets.base', new $behaviorBaseClass);
                break;

            case 'category':
                // This *should* be a temporary fix. Ticket open with craft about fixing this
                if (isset($_POST['livePreview'])) {
                    $element->groupId = $_POST['groupId'] ?? null;
                }

                if (!isset($element->groupId)) {
                    break;
                }

                $behaviorBaseClass = static::$baseBehaviorNamespace . 'categories\\BaseCategoryBehavior';
                $behaviorClassName = static::$baseBehaviorNamespace . 'categories\\' . ucFirst($element->group->handle) . 'Behavior';

                //extra
                $extraBaseBehaviorClassName = $this->extraBehaviorNamespace . 'categories\\BaseCategoryBehavior';
                $extraBehaviorClassName = $this->extraBehaviorNamespace . 'categories\\' . ucFirst($element->group->handle) . 'Behavior';

                if (class_exists($extraBehaviorClassName)) {
                    $element->attachBehavior(uniqid('categories.' . $element->group->handle), new $extraBehaviorClassName);
                } else if (class_exists($behaviorClassName)) {
                    $element->attachBehavior(uniqid('categories.' . $element->group->handle), new $behaviorClassName);
                } else if (class_exists($extraBaseBehaviorClassName)) {
                    $element->attachBehavior(uniqid('categories.base'), new $extraBaseBehaviorClassName);
                } else {
                    $element->attachBehavior('categories.base', new $behaviorBaseClass);
                }
                break;

            case 'entry':
                // This *should* be a temporary fix. Ticket open with craft about fixing this
                if (isset($_POST['livePreview'])) {
                    $element->sectionId = $_POST['sectionId'] ?? null;
                }

                if (!isset($element->sectionId)) {
                    break;
                }

                $section = $element->getSection();
                $behaviorBaseClass = static::$baseBehaviorNamespace . 'entries\\BaseEntryBehavior';
                $behaviorClassName = static::$baseBehaviorNamespace . 'entries\\' . ucFirst($section->handle) . 'Behavior';

                //extra
                $extraBaseBehaviorClassName = $this->extraBehaviorNamespace . 'entries\\BaseEntryBehavior';
                $extraBehaviorClassName = $this->extraBehaviorNamespace . 'entries\\' . ucFirst($section->handle) . 'Behavior';

                if (class_exists($extraBehaviorClassName)) {
                    $element->attachBehavior(uniqid('entries.' . $section->handle), new $extraBehaviorClassName);
                } else if (class_exists($behaviorClassName)) {
                    $element->attachBehavior(uniqid('entries.' . $section->handle), new $behaviorClassName);
                } else if (class_exists($extraBaseBehaviorClassName)) {
                    $element->attachBehavior('entries.base', new $extraBaseBehaviorClassName);
                } else {
                    $element->attachBehavior('entries.base', new $behaviorBaseClass);
                }
                break;

            case 'globalset':
                $behaviorBaseClass = static::$baseBehaviorNamespace . 'globals\\BaseGlobalBehavior';
                $behaviorClassName = static::$baseBehaviorNamespace . 'globals\\' . ucFirst($element->handle) . 'Behavior';

                //extra
                $extraBaseBehaviorClassName = $this->extraBehaviorNamespace . 'globals\\BaseGlobalBehavior';
                $extraBehaviorClassName = $this->extraBehaviorNamespace . 'globals\\' . ucFirst($element->handle) . 'Behavior';

                if (class_exists($extraBehaviorClassName)) {
                    $element->attachBehavior(uniqid('globalset.' . $element->handle), new $extraBehaviorClassName);
                } else if (class_exists($behaviorClassName)) {
                    $element->attachBehavior(uniqid('globalset.' . $element->handle), new $behaviorClassName);
                } else if (class_exists($extraBaseBehaviorClassName)) {
                    $element->attachBehavior('globalset.base', new $extraBaseBehaviorClassName);
                } else {
                    $element->attachBehavior('globalset.base', new $behaviorBaseClass);
                }
                break;

            case 'matrixblock':
                $behaviorBaseClass = static::$baseBehaviorNamespace . 'matrixblocks\\BaseMatrixBehavior';
                $extraBaseBehaviorClassName = $this->extraBehaviorNamespace . 'matrixblocks\\BaseMatrixBehavior';

                if (!isset($element->fieldId)) {
                    if (class_exists($extraBaseBehaviorClassName)) {
                        $element->attachBehavior('entries.base', new $extraBaseBehaviorClassName);
                    } else {
                        $element->attachBehavior('matrixblocks.base', new $behaviorBaseClass);
                    }
                    break;
                }

                $field = Craft::$app->getFields()->getFieldById($element->fieldId);
                $behaviorClassName = static::$baseBehaviorNamespace . 'matrixblocks\\' . ucFirst($field->handle) . 'Behavior';

                //extra
                $extraBehaviorClassName = $this->extraBehaviorNamespace . 'matrixblocks\\' . ucFirst($field->handle) . 'Behavior';

                if (class_exists($extraBehaviorClassName)) {
                    $element->attachBehavior(uniqid('matrixblocks.' . $field->handle), new $extraBehaviorClassName);
                } else if (class_exists($behaviorClassName)) {
                    $element->attachBehavior(uniqid('matrixblocks.' . $field->handle), new $behaviorClassName);
                } else if (class_exists($extraBaseBehaviorClassName)) {
                    $element->attachBehavior('entries.base', new $extraBaseBehaviorClassName);
                } else {
                    $element->attachBehavior('matrixblocks.base', new $behaviorBaseClass);
                }
                break;

            case 'tag':
                break;

            case 'user':
                break;

            case 'product':
                // Only proceed if Craft Commerce is enabled
                if (!Craft::$app->plugins->isPluginEnabled('commerce')) {
                    break;
                }

                // This *should* be a temporary fix. Ticket open with craft about fixing this
                if (isset($_POST['livePreview'])) {
                    $element->typeId = $_POST['typeId'] ?? null;
                }

                if (!isset($element->typeId)) {
                    break;
                }

                $type = $element->getType();
                $behaviorBaseClass = static::$baseBehaviorNamespace . 'products\\BaseProductBehavior';
                $behaviorClassName = static::$baseBehaviorNamespace . 'products\\' . ucFirst($type->handle) . 'Behavior';

                //extra
                $extraBaseBehaviorClassName = $this->extraBehaviorNamespace . 'products\\BaseProductBehavior';
                $extraBehaviorClassName = $this->extraBehaviorNamespace . 'products\\' . ucFirst($type->handle) . 'Behavior';

                if (class_exists($extraBehaviorClassName)) {
                    $element->attachBehavior(uniqid('products.' . $type->handle), new $extraBehaviorClassName);
                } elseif (class_exists($behaviorClassName)) {
                    $element->attachBehavior(uniqid('products.' . $type->handle), new $behaviorClassName);
                } elseif (class_exists($extraBaseBehaviorClassName)) {
                    $element->attachBehavior('products.base', new $extraBaseBehaviorClassName);
                } else {
                    $element->attachBehavior('products.base', new $behaviorBaseClass);
                }
                break;

            case 'variant':
                // Only proceed if Craft Commerce is enabled
                if (!Craft::$app->plugins->isPluginEnabled('commerce')) {
                    break;
                }

                // This *should* be a temporary fix. Ticket open with craft about fixing this
                if (isset($_POST['livePreview'])) {
                    $element->productId = $_POST['productId'] ?? null;
                }

                if (!isset($element->productId)) {
                    break;
                }

                $product = $element->getProduct();
                $handle = $product->type->handle; //$this->kebabToCamel($product->type->handle);
                $behaviorBaseClass = static::$baseBehaviorNamespace . 'products\\variants\\BaseProductVariantBehavior';
                $behaviorClassName = static::$baseBehaviorNamespace . 'products\\variants\\' . ucFirst($handle) . 'Behavior';

                //extra
                $extraBaseBehaviorClassName = $this->extraBehaviorNamespace . 'products\\variants\\BaseProductVariantBehavior';
                $extraBehaviorClassName = $this->extraBehaviorNamespace . 'products\\variants\\' . ucFirst($handle) . 'Behavior';

                if (class_exists($extraBehaviorClassName)) {
                    $element->attachBehavior(uniqid('productvariants.' . $handle), new $extraBehaviorClassName);
                } elseif (class_exists($behaviorClassName)) {
                    $element->attachBehavior(uniqid('productvariants.' . $handle), new $behaviorClassName);
                } elseif (class_exists($extraBaseBehaviorClassName)) {
                    $element->attachBehavior('productvariants.base', new $extraBaseBehaviorClassName);
                } else {
                    $element->attachBehavior('productvariants.base', new $behaviorBaseClass);
                }
                break;

            case \craft\commerce\elements\Order::class:
                /**
                 * Order/Carts don't really have types or handles, but
                 * including this here so we can attach BaseOrderBehavior
                 */

                // Only proceed if Craft Commerce is enabled
                if (!Craft::$app->plugins->isPluginEnabled('commerce')) {
                    break;
                }

                $behaviorBaseClass = static::$baseBehaviorNamespace . 'orders\\BaseOrderBehavior';
                $extraBaseBehaviorClassName = $this->extraBehaviorNamespace . 'orders\\BaseOrderBehavior';

                if (class_exists($extraBaseBehaviorClassName)) {
                    $element->attachBehavior('orders.base', new $extraBaseBehaviorClassName);
                } else {
                    $element->attachBehavior('orders.base', new $behaviorBaseClass);
                }
                break;
        }
    }
}
