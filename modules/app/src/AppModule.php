<?php

namespace unionco\app;

use yii\base\Event;
use yii\base\Module;
use unionco\app\services\MyProvider;
use unionco\geolocation\services\Geolocation;
use unionco\geolocation\events\RegisterProvidersEvent;

class AppModule extends Module
{
    /** @var AppModule $instance */
    public static $instance;

    public function __construct($id, $parent = null, array $config = [])
    {
        static::setInstance($this);

        parent::__construct($id, $parent, $config);
    }

    /**
     * @return void
     */
    public function init() {
        parent::init();
        self::$instance = $this;

        Event::on(
            Geolocation::class,
            Geolocation::EVENT_REGISTER_PROVIDERS,
            /**
             * @return void
             */
            function (RegisterProvidersEvent $event) {
                $event->providers[] = MyProvider::class;
            }
        );
    }
}
