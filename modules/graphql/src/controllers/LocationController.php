<?php

namespace unionco\graphql\controllers;

use Craft;
use craft\helpers\Json;
use yii\web\Controller;
use yii\graphql\GraphQLAction;

class LocationController extends Controller
{
    public function beforeAction($action)
    {
        // var_dump($action);
        // die;
    }

    public function actions()
    {
        // var_dump($query); die;
        return [
            'index' => [
                'class' => GraphQLAction::class,
            ]
        ];
    }
}
