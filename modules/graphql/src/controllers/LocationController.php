<?php

namespace unionco\graphql\controllers;

use yii\web\Controller;
use yii\graphql\GraphQLAction;

class LocationController extends Controller
{
    public function actions()
    {
        return [
            'index' => [
                'class' => GraphQLAction::class,
            ]
        ];
    }
}
