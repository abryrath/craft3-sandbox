<?php

namespace unionco\graphql;

use Craft;
use yii\base\Event;
use yii\base\Module;
use craft\web\UrlManager;
use yii\graphql\GraphQLModuleTrait;
use craft\events\RegisterUrlRulesEvent;
use unionco\graphql\types\LocationType;
use unionco\graphql\queries\LocationQuery;
use yii\console\Application as ConsoleApplication;

class GraphQLModule extends Module
{
    use GraphQLModuleTrait;

    public function init()
    {
        parent::init();
        $this->schema = [
            'query' => [
                'location' => LocationQuery::class,
            ],
            'mutation' => [],
            'types' => [
                'location' => LocationType::class,
            ]
        ];

        $this->controllerNamespace = 'unionco\graphql\controllers';
        if (Craft::$app instanceof ConsoleApplication) {
            $this->controllerNamespace = 'unionco\graphql\console\controllers';
        }

        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_SITE_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                $event->rules['graphql'] = 'graphql/location/index';
            }
        );
    }
}
