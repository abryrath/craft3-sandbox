<?php

use union\core\UnionModule;
use yii\helpers\StringHelper;
use yii\helpers\ArrayHelper;

if (!function_exists('ago')) {
    function ago(DateTime $time, DateTime $timeCompare)
    {
        try {
            $interval = $time->diff($timeCompare);

            if ($interval->d >= 1) {
                $ago = $interval->d . ' Days Ago';
            } elseif ($interval->h >= 1) {
                $ago = $interval->h . ' Hours Ago';
            } elseif ($interval->m >= 1) {
                $ago = $interval->m . ' Minutes Ago';
            } else {
                $ago = $interval->s . ' Seconds Ago';
            }

            return $ago;
        } catch(Exception $e) {
            log_data('ago-exception', $e->getMessage());
        }

        return '';
    }
}

if (! function_exists('asset_query')) {
    function asset_query($path, $params = [])
    {
        $version = 1;

        $forceLocal = $params['forceLocal'] ?? null;

        // resolve path to file path
        $path = trim($path, '/');
        $filePath = realpath($path);

        // get timestamp of file path
        if (file_exists($filePath)) {
            $version = filemtime($path);
        }

        if ($forceLocal) {
            $baseUrl = $params['baseUrl'] ?? env('ASSET_BASE_LOCAL_URL', '/');

            return $baseUrl . $path . '?v=' . $version;
        }

        $baseUrl = $params['baseUrl'] ?? env('ASSET_BASE_URL', '/');

        return $baseUrl . $path . '?v=' . $version;
    }
}

if (! function_exists('imgix')) {
    function imgix($path, $_params = [])
    {
        $params = [
            'baseUrl' => env('ASSET_IMGIX_URL'),
            'imgix' => $_params,
        ];

        if(!env('ENABLE_FILE_ASSET_VERSIONING')) {
            return asset_query($path, $params);
        }

        return asset($path, $params);
    }
}

if (! function_exists('asset')) {
    function asset($path, $params = [])
    {
        // resolve path to file path
        $path = trim($path, '/');

        if(!env('ENABLE_FILE_ASSET_VERSIONING')) {
            return asset_query($path, $params);
        }

        $timestamp = date('Y-m-d');
        $filePath = realpath($path);

        // get timestamp of file path
        if (file_exists($filePath)) {
            $timestamp = filemtime($path);
        }

        // Get the extension of the file.
        $extension = pathinfo($filePath, PATHINFO_EXTENSION);

        // Strip the extension off of the path.
        $stripped = substr($path, 0, -(strlen($extension) + 1));

        // Put the timestamp between the filename and the extension.
        $path = implode('.', array($stripped, $timestamp, $extension));

        $baseUrl = $params['baseUrl'] ?? env('ASSET_BASE_URL', '/');
        $url = $baseUrl . $path;

        if ($imgixParams = $params['imgix'] ?? null) {
            return $url . '?' . http_build_query($imgixParams);
        }

        return $url;
    }
}

if (! function_exists('env')) {
    function env($key, $default = null)
    {
        // first try normal env
        $value = getenv($key);

        // if normal env is false, try site specific env
        if ($value === false) {
            return $default;
        }

        switch (strtolower($value)) {
            case 'true':
            case '(true)':
                return true;

            case 'false':
            case '(false)':
                return false;

            case 'empty':
            case '(empty)':
                return '';

            case 'null':
            case '(null)':
                return;
        }

        if (strlen($value) > 1 && StringHelper::startsWith($value, '"') && StringHelper::endsWith($value, '"')) {
            return substr($value, 1, -1);
        }

        return $value;
    }
}

if (! function_exists('cache_key')) {
    function cache_key($key, $params = [])
    {
        return $key . '_' . md5(json_encode($params));
    }
}

if (!function_exists('get_remote_file')) {
    function get_remote_file($url)
    {
        $ch = curl_init($url);

        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);

        $data = curl_exec ($ch);

        curl_close ($ch);

        return $data;
    }

}
if (!function_exists('get_remote_headers')) {
    function get_remote_headers($url)
    {
        $ch = curl_init();

        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_URL => $url,
        ]);

        curl_exec($ch);

        $responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        curl_close($ch);

        return $responseCode;
    }
}

if (!function_exists('log_data')) {
    function log_data($key, $data)
    {
        static $logDataService = null;
        static $request = null;

        if ($request === null) {
            $request = Craft::$app->request;
        }

        if ($logDataService === null) {
            try {
                $logDataService = Craft::$app->getModule('unionco')->log;
            } catch (Exception $e) {
                $logDataService = new union\core\services\LogService;
            }
        }

        $requestUri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';
        $referrer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
        $ipAddress = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '';
        $userAgent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';

        $data = [
            'key' => $key,
            'data' => is_string($data) ? $data : print_r($data, true),
            'url' => StringHelper::truncate($requestUri, 250),
            'referer' => StringHelper::truncate($referrer, 250),
            'ip_address' => StringHelper::truncate($ipAddress, 250),
            'user_agent' => StringHelper::truncate($userAgent, 250),
            'pid' => getmypid(),
        ];

        $logDataService->create($data);
    }
}

if (!function_exists('post_remote_data')) {
    function post_remote_data($url, $data, $params = []) {
        $ch = curl_init($url);

        $query = http_build_query($data);

        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);

        if ($basicAuth = $params['basicAuth'] ?? null) {
            curl_setopt($ch, CURLOPT_USERPWD, $basicAuth['username'] . ':' . $basicAuth['password']);
        }

        $result = curl_exec($ch);

        curl_close ($ch);

        return $result;
    }
}

if (!function_exists('render_template')) {
    function render_template($path, $data = [], $options = [])
    {
        static $templateService = null;

        if ($templateService === null) {
            $templateService = Craft::$app->getView();
        }

        return $templateService->renderTemplate($path, $data);
    }
}

if (!function_exists('request')) {
    function request($key = null, $default = null)
    {
        static $request = null;

        if ($request === null) {
            $request = Craft::$app->request;
        }

        $post = $request->getBodyParams() ?? [];
        $get = $request->getQueryParams() ?? [];
        $params = array_merge($get, $post);

        if ($key) {
            return ArrayHelper::getValue($params, $key, $default);
        }

        return $params;
    }
}

if (!function_exists('save_remote_file')) {
    function save_remote_file($url, $localPath)
    {
        $ch = curl_init($url);

        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 2);

        $data = curl_exec($ch);

        curl_close ($ch);

        $fp = fopen($localPath, 'w');

        fwrite($fp, $data ) ;
        fclose($fp);

        return true;
    }
}

if (!function_exists('shell_exec_async')) {
    function shell_exec_async($command, $log = true)
    {
        $asyncCommand = $command . ' > /dev/null 2>&1 &';

        if ($log) {
            log_data('shell-exec-async', $asyncCommand);
        }

        $result = shell_exec($asyncCommand);

        return $result;
    }
}

if (! function_exists('storage_path')) {
    function storage_path($path = null)
    {
        static $craftStoragePath;

        if ($craftStoragePath === null) {
            $craftStoragePath = Craft::$app->path->getStoragePath();
        }

        if ($path) {
            return $craftStoragePath . '/' . trim($path, '/');
        }

        return $craftStoragePath . '/';
    }

}
if (! function_exists('union')) {
    function union($component = null)
    {
        $union = UnionModule::$instance;

        if ($component) {
            return $union->{$component};
        }

        return $union;
    }
}

if (! function_exists('url')) {
    function url($path = '', $query = [])
    {
        $url = env('BASE_URL') . trim($path, '/');

        if ($query) {
            return $url . '?' . http_build_query($query);
        }

        return $url;
    }
}

if (!function_exists('utc_et')) {
    function utc_et($date, $format = null)
    {
        $dateTime = new DateTime($date, new DateTimeZone('UTC'));

        $dateTime->setTimezone(new DateTimeZone('America/New_York'));

        if ($format != null) {
            return $dateTime->format($format);
        }

        return $dateTime;
    }
}
