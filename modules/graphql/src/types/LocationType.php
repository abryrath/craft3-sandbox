<?php

namespace unionco\graphql\types;

use yii\graphql\base\GraphQLType;
use GraphQL\Examples\Blog\Types;

class LocationType extends GraphQLType
{
    protected $attributes = [
        'name' => 'location',
        'description' => 'location desc',
    ];

    public function fields()
    {
        $result = [
            'id' => [
                'type' => Type::id()
            ],
            'address' => Types::string(),
        ];

        return $result;
    }
}
\