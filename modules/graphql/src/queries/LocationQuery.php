<?php

namespace unionco\graphql\queries;

use yii\graphql\GraphQL;
use GraphQL\Type\Definition\Type;
use yii\graphql\base\GraphQLQuery;
use unionco\graphql\models\Location;
use unionco\graphql\types\LocationType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Examples\Blog\Data\DataSource;

class LocationQuery extends GraphQLQuery
{
    public function type()
    {
        return GraphQL::type(LocationType::class);
    }

    public function args()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::id()),
            ],
        ];
    }

    public function resolve($value, $args, $context, ResolveInfo $info)
    {
        $location = new Location();
        $location->id = 10;
        $location->address = "test";

        return $location;
    }
}
