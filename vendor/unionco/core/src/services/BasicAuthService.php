<?php
namespace union\core\services;

use Craft;
use yii\web\Cookie;

class BasicAuthService
{
    public static function protect($user, $pass, $environments = [], $params = [])
    {
        $isWebRequest = !Craft::$app->getRequest()->getIsConsoleRequest();

        if (in_array(env('ENVIRONMENT'), $environments) && $isWebRequest) {
            $userAgent = Craft::$app->request->getUserAgent();

            $UAExcludes = (array) ($params['UAExcludes'] ?? []);

            foreach ($UAExcludes as $UAExclude) {
                if ($UAExclude) {
                    if (stristr($userAgent, $UAExclude)) {
                        return;
                    }
                }
            }

            // exclude paths
            $requestPath = Craft::$app->request->getFullPath();
            $excludePaths = (array) ($params['ExcludePaths'] ?? []);
            foreach ($excludePaths as $path) {
                if ($path && strpos($requestPath, $path) > -1) {
                    return;
                }
            }
            
            $authUser = isset($_SERVER['PHP_AUTH_USER']) ? $_SERVER['PHP_AUTH_USER'] : FALSE;
            $authPass = isset($_SERVER['PHP_AUTH_PW']) ? $_SERVER['PHP_AUTH_PW'] : FALSE;

            $authUserKey = 'basicAuthUser-' . $user;
            $authPassKey = 'basicAuthPass-' . $user;

            $requestCookies = Craft::$app->request->cookies;

            if (!($requestCookies->getValue($authUserKey) == $user && $requestCookies->getValue($authPassKey) == $pass)) {
                if (!($authUser === $user && $authPass === $pass)) {
                    header('WWW-Authenticate: Basic realm="Restricted"');
                    header('HTTP/1.0 401 Unauthorized');
                    exit;
                }

                $responseCookies = Craft::$app->response->cookies;

                $responseCookies->add(new Cookie([
                    'name' => $authUserKey,
                    'value' => $authUser,
                ]));

                $responseCookies->add(new Cookie([
                    'name' => $authPassKey,
                    'value' => $authPass,
                ]));
            }
        }
    }
}
