<?php

namespace union\core\services;

use Craft;
use craft\helpers\UrlHelper;

class AuthService
{
    protected $loginUri = 'user/login';

    public function requireUserGroup($user, $_groups, $opts = [])
    {
        $alwaysAllowAdmin = $opts['alwaysAllowAdmin'] ?? true;
        $redirectUri = $opts['redirectUri'] ?? $this->loginUri;
        $excludedUris = $opts['excludedUris'] ?? [];

        $path = Craft::$app->getRequest()->getFullPath();

        if (in_array($path, $excludedUris)) {
            return;
        }

        $groups = (array) $_groups;

        if (!$user) {
            $response = Craft::$app->getResponse();

            $response->redirect(env('BASE_URL') . $this->loginUri, 302);
            $response->send();

            exit;
        }

        $userIsInGroups = $alwaysAllowAdmin && $user->admin === '1';

        if (!$userIsInGroups) {
            foreach ($groups as $group) {
                if ($user->isInGroup($group)) {
                    $userIsInGroups = true;
                }
            }
        }

        if (!$userIsInGroups) {
            Craft::$app->getResponse()->redirect(UrlHelper::url('user/login'), 302);
        }
    }

    public function setLoginUri($uri)
    {
        $this->loginUri = $uri;
    }
}