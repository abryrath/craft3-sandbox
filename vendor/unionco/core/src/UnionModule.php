<?php
/**
 * Union plugin for Craft CMS 3.x
 *
 * UNION.co Plugin
 *
 * @link      union.co
 * @copyright Copyright (c) 2017 UNION
 */
namespace union\core;

use Craft;
use craft\i18n\PhpMessageSource;
use craft\base\Element;
use craft\base\ElementAction;
use craft\base\Plugin as BasePlugin;
use craft\console\Application as ConsoleApplication;
use craft\elements\actions\View;
use craft\elements\db\ElementQuery;
use craft\elements\Entry;
use craft\events\ModelEvent;
use craft\events\PluginEvent;
use craft\events\PopulateElementEvent;
use craft\events\RegisterElementActionsEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\services\Plugins;
use craft\web\twig\variables\CraftVariable;
use craft\web\UrlManager;

use union\core\services\AuthService;
use union\core\services\BasicAuthService;
use union\core\services\BehaviorService;
use union\core\services\LogService;
use union\core\services\MetaService;
use union\core\services\SyncDbService;
use union\core\services\MigrateService;
use union\core\services\UnionService;
use union\core\services\UtilService;
use union\core\twigextensions\UnionTwigExtension;
use union\core\variables\UnionVariable;

use yii\base\Event;
use yii\base\Module;

/**
 * Craft plugins are very much like little applications in and of themselves. We’ve made
 * it as simple as we can, but the training wheels are off. A little prior knowledge is
 * going to be required to write a plugin.
 *
 * For the purposes of the plugin docs, we’re going to assume that you know PHP and SQL,
 * as well as some semi-advanced concepts like object-oriented programming and PHP namespaces.
 *
 * https://craftcms.com/docs/plugins/introduction
 *
 * @author    UNION
 * @package   Union
 * @since     1.0.1
 *
 * @property  UnionModule $module
 */
class UnionModule extends Module
{
    // Static Properties
    // =========================================================================

    /**
     * @var UnionModule
     */
    public static $instance;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@union/core', $this->getBasePath());
        $this->controllerNamespace = 'union\core\controllers';

        // Translation category
        $i18n = Craft::$app->getI18n();
        /** @noinspection UnSafeIsSetOverArrayInspection */
        if (!isset($i18n->translations[$id]) && !isset($i18n->translations[$id.'*'])) {
            $i18n->translations[$id] = [
                'class' => PhpMessageSource::class,
                'sourceLanguage' => 'en-US',
                'basePath' => '@union/core/translations',
                'forceTranslation' => true,
                'allowOverrides' => true,
            ];
        }

        // Set this as the global instance of this module class
        static::setInstance($this);
        parent::__construct($id, $parent, $config);
    }

    /**
     * Set our $plugin static property to this class so that it can be accessed via
     * Union::$plugin
     *
     * Called after the plugin class is instantiated; do any one-time initialization
     * here such as hooks and events.
     *
     * If you have a '/vendor/autoload.php' file, it will be loaded for you automatically;
     * you do not need to load it in your init() method.
     *
     */
    public function init()
    {
        parent::init();
        self::$instance = $this;

        // Set initial base components first
        $this->setComponents([
            'auth' => AuthService::class,
            'behavior' => BehaviorService::class,
            'log' => LogService::class,
            'meta' => MetaService::class,
            'migrate' => MigrateService::class,
            'migrate.asset' => 'union\core\services\migrate\AssetService',
            'syncdb' => SyncDbService::class,
            'union' => UnionService::class,
            'util' => UtilService::class,
        ]);

        // Add base twig extensions
        Craft::$app->view->twig->addExtension(new UnionTwigExtension());

        // Register our variables
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            function (Event $event) {
                /** @var CraftVariable $variable */
                $variable = $event->sender;
                $variable->set('union', UnionVariable::class);
            }
        );

        // listen to init
        $this->behavior->listen();

        // basic auth
        $enableBasicAuth = getenv('BASIC_AUTH_ENABLED') === "true";

        if ($enableBasicAuth) {
            $user = getenv('BASIC_AUTH_USER');
            $pass = getenv('BASIC_AUTH_PASSWORD');
            $excludeEnvironments = [getenv('ENVIRONMENT')];
            $params = [];

            if ($excludeUAContains = getenv('BASIC_AUTH_UA_EXCLUDE')) {
                $params['UAExcludes'] = explode('__UA__', getenv('BASIC_AUTH_UA_EXCLUDE'));
            }

            if ($exludePaths = getenv('BASIC_AUTH_EXCLUDE_PATHS')) {
                $params['ExcludePaths'] = explode(",", getenv('BASIC_AUTH_EXCLUDE_PATHS'));
            }
            
            BasicAuthService::protect($user, $pass, $excludeEnvironments, $params);
        }

        /**
         * Logging in Craft involves using one of the following methods:
         *
         * Craft::trace(): record a message to trace how a piece of code runs. This is mainly for development use.
         * Craft::info(): record a message that conveys some useful information.
         * Craft::warning(): record a warning message that indicates something unexpected has happened.
         * Craft::error(): record a fatal error that should be investigated as soon as possible.
         *
         * Unless `devMode` is on, only Craft::warning() & Craft::error() will log to `craft/storage/logs/web.log`
         *
         * It's recommended that you pass in the magic constant `__METHOD__` as the second parameter, which sets
         * the category to the method (prefixed with the fully qualified class name) where the constant appears.
         *
         * To enable the Yii debug toolbar, go to your user account in the AdminCP and check the
         * [] Show the debug toolbar on the front end & [] Show the debug toolbar on the Control Panel
         *
         * http://www.yiiframework.com/doc-2.0/guide-runtime-logging.html
         */
        Craft::info(
            Craft::t(
                'core',
                '{name} module loaded',
                ['name' => 'UnionCore']
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================
    public function getSettings()
    {
        $config = [];

        if (file_exists(CRAFT_BASE_PATH . "/config/union.php")) {
            $config = require CRAFT_BASE_PATH . "/config/union.php";
        }

        return (object) $config;
    }
}