<?php

namespace unionco\googleservices\fields;

use Craft;
use yii\db\Schema;
use craft\base\Field;
use craft\base\ElementInterface;
use craft\base\PreviewableFieldInterface;
use craft\elements\db\ElementQueryInterface;
use unionco\googleservices\GoogleServices;
use unionco\googleservices\assetbundles\googleservices\GoogleServicesAsset;

class GooglePlacesField extends Field implements PreviewableFieldInterface
{
    /**
     * @var string The type of database column the field should have in the content table
     */
    public $columnType = Schema::TYPE_TEXT;

    /** @var string */
    public $mapCenter = '';

    /** @var string */
    public $placeId = '';

    /** @var array */
    public $reviews = [];

    /** @return string */
    public static function displayName(): string
    {
        /** @psalm-suppress UndefinedClass */
        return Craft::t('google-services', 'Google Place');
    }

    /** @return bool */
    public static function hasContentColumn(): bool
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function getContentColumnType(): string
    {
        return $this->columnType;
    }

    /**
     * @inheritdoc
     * @return array
     */
    public function rules()
    {
        $rules = parent::rules();
        $rules[] = [
            ['mapCenter'],
            'required',
        ];
        return $rules;
    }

    /** 
     * @param $value
     * @param ElementInterface $element
     * @return Field 
     **/
    public function normalizeValue($value, ElementInterface $element = null)
    {
        return GoogleServices::$plugin->service->getField($this, $element, $value);
    }

    /**
     * @param ElementQueryInterface $query
     * @param $value
     * @return null
     */
    public function modifyElementsQuery(ElementQueryInterface $query, $value)
    {
        GoogleServices::$plugin->service->modifyElementsQuery($query, $value);
    }

    /**
     * @param ElementInterface $element
     * @param bool $isNew
     * @return null
     */
    public function afterElementSave(ElementInterface $element, bool $isNew)
    {
        GoogleServices::$plugin->service->saveField($this, $element);
        parent::afterElementSave($element, $isNew);
    }

    /**
     * @inheritdoc
     * @return string
     */
    public function getSettingsHtml()
    {
        return Craft::$app->getView()->renderTemplate(
            'google-services/field-settings',
            [
                'field' => $this,
            ]
        );
    }

    /** @return string */
    public function getMapCenter(): string
    {
        if ($this->mapCenter) {
            return $this->mapCenter;
        }

        /** @var \unionco\googleservices\models\Settings */
        $settings = GoogleServices::$plugin->getSettings();
        
        return $settings->mapCenter;
    }

    /**
     * @inheritdoc
     * @param $value
     * @param ElementInterface $element
     * @return string
     */
    public function getInputHtml($value, ElementInterface $element = null): string
    {
        $view = Craft::$app->getView();
        $id = $view->formatInputId($this->handle);
        $namespacedId = $view->namespaceInputId($id);
        $view->registerAssetBundle(GoogleServicesAsset::class);

        $settings = GoogleServices::$plugin->getSettings();
        if (!$settings) {
            throw new \Exception('Settings model is null');
        }
        $googleMapsApiKey = $settings->googleMapsApiKey;
        $view->registerJs(
            "Craft.GoogleServicesPlugin.make('places', {
                key: '{$googleMapsApiKey}',
                el: '{$namespacedId}',
                settings: {
                    center: '". $this->getMapCenter() ."',
                    placeId: '{$value->placeId}',
                    fillEntry: true,
                    autocomplete: {}
                }
            });"
        );

        return $view->renderTemplate(
            'google-services/field-input',
            [
                'id' => $id,
                'name' => $this->handle,
                'value' => $value,
                'field' => $this,
            ]
        );
    }
}
