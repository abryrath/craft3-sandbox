<?php
/**
 * Google Places plugin for Craft CMS 3.x
 *
 * Google Places API Integration
 *
 * @link      https://github.com/unionco
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 */

namespace unionco\googleservices;

use Craft;
use craft\web\View;
use yii\base\Event;
use craft\base\Plugin;
use craft\services\Fields;
use craft\services\Plugins;
use craft\events\PluginEvent;
use unionco\googleservices\models\Settings;
use craft\events\RegisterTemplateRootsEvent;
use craft\events\RegisterComponentTypesEvent;
use unionco\googleservices\fields\GooglePlacesField;

/**
 * Class GoogleServices
 *
 * @author    Abry Rath <abry.rath@union.co>
 * @package   GoogleServices
 * @since     0.0.1
 *
 */
class GoogleServices extends Plugin
{
    /** @var \unionco\googleservices\GoogleServices **/
    public static $plugin;
    /** @var bool */
    public $hasCpSettings = true;
    /** @var string */
    public $schemaVersion = '0.0.2';

    /** @return void */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        Craft::setAlias('@googleservices', $this->getBasePath());

        $this->setComponents([
            'service' => \unionco\googleservices\services\GoogleServicesService::class,
        ]);

        // Event::on(
        //     Plugins::class,
        //     Plugins::EVENT_AFTER_INSTALL_PLUGIN,
        //     /** @return void */
        //     function (PluginEvent $event) {
        //         if ($event->plugin === $this) {
        //         }
        //     }
        // );

        Event::on(
            View::class,
            View::EVENT_REGISTER_CP_TEMPLATE_ROOTS,
            /** @return void */
            function (RegisterTemplateRootsEvent $event) {
                $event->roots['google-services'] = __DIR__ . '/templates';
            }
        );

        Event::on(
            Fields::class,
            Fields::EVENT_REGISTER_FIELD_TYPES,
            /** @return void */
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = GooglePlacesField::class;
                // $event->types[] = MapField::class;
            }
        );

        Craft::info(
            Craft::t(
                'google-services',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    /** @return void */
    public function afterInstall()
    {
        parent::afterInstall();
    }

    /** @return Settings */
    protected function createSettingsModel()
    {
        return new Settings();
    }

    /** @return string */
    protected function settingsHtml()
    {
        return Craft::$app->getView()->renderTemplate('google-services/settings', ['settings' => $this->getSettings()]);
    }
}
