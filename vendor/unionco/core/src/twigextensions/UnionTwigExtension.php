<?php
/**
 * Union plugin for Craft CMS 3.x
 *
 * UNION.co Plugin
 *
 * @link      union.co
 * @copyright Copyright (c) 2017 UNION
 */
namespace union\core\twigextensions;

use Craft;

/**
 * Twig can be extended in many ways; you can add extra tags, filters, tests, operators,
 * global variables, and functions. You can even extend the parser itself with
 * node visitors.
 *
 * http://twig.sensiolabs.org/doc/advanced.html
 *
 * @author    UNION
 * @package   Union
 * @since     1.0.1
 */
class UnionTwigExtension extends \Twig_Extension implements \Twig_Extension_GlobalsInterface
{
    // Public Methods
    // =========================================================================

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return 'Union';
    }

    /**
     * Returns an array of Twig filters, used in Twig templates via:
     *
     *      {{ 'something' | someFilter }}
     *
     * @return array
     */
    public function getFilters()
    {
        return [
            new \Twig_SimpleFilter('format_text', 'format_text'),
            new \Twig_SimpleFilter('videoEmbedUrl', [$this, 'videoEmbedUrl'], [
                'is_safe' => [
                    'evaluate' => true
                ]]
            )
        ];
    }

    /**
     * Returns an array of Twig functions, used in Twig templates via:
     *
     *      {% set this = someFunction('something') %}
     *
    * @return array
     */
    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('_url', 'url', [
                'is_safe' => [
                    'evaluate' => true
                ]]
            ),

            new \Twig_SimpleFunction('asset', 'asset', [
                'is_safe' => [
                    'evaluate' => true
                ]]
            ),

            new \Twig_SimpleFunction('debug', [$this, 'debug'], [
                'is_safe' => [
                    'evaluate' => true
                ]]
            ),

            new \Twig_SimpleFunction('union', [$this, 'findService'], [
                'is_safe' => [
                    'evaluate' => true
                ]]
            ),
        ];
    }

    public function getGlobals()
    {
        $globals = Craft::$app->globals;
        $stats = $globals->getSetByHandle('stats');

        return [
            'util' => union('util'),
            'meta' => union('meta'),
            'auth' => union('auth'),
            '_' => new class() {
                protected $prefixes = [];

                public function get(string $name)
                {
                    return Craft::$app->get($name);
                }
            },
        ];
    }

    /**
     * Service Locator
     *
     * @param null $name
     * @return service
     */
    public function findService($name)
    {
        return Craft::$app->get($name);
    }

    /**
     * Currently supports vimeo and youtube urls in the following formats:
     * - https://vimeo.com/VIDEO_ID
     * - https://player.vimeo.com/video/VIDEO_ID
     * - https://www.youtube.com/watch?v=VIDEO_ID
     * - https://youtu.be/VIDEO_ID
     * - https://www.youtube.com/embed/VIDEO_ID
     * @param null $source string
     * @return service
     */
    public function videoEmbedUrl($sourceUrl)
    {
        $stripProtocol = preg_replace('/^((https?:)?\/\/(www.)?)?/', '', $sourceUrl);

        if (
            strpos($stripProtocol, 'player.vimeo.com/video/') === 0
            ||
            strpos($stripProtocol, 'youtube.com/embed/') === 0
        ) {
            // embed ready
            return $sourceUrl;
        }

        if (strpos($stripProtocol, 'vimeo.com/') === 0) {
            preg_match('/vimeo.com\/(\d+)/', $stripProtocol, $parts);
            $id = $parts[1];
            return "https://player.vimeo.com/video/{$id}";
        }

        if (strpos($stripProtocol, 'youtu.be') === 0) {
            preg_match('/youtu.be\/([^?]+)/', $stripProtocol, $parts);
            $id = $parts[1];
            return "https://www.youtube.com/embed/{$id}";
        }

        if (strpos($stripProtocol, 'youtube.com/watch') === 0) {
            preg_match('/[?&]v=([^\&]+)/', $stripProtocol, $parts);
            $id = $parts[1];
            return "https://www.youtube.com/embed/{$id}";
        }

        return false;
    }

    /**
     * 
     */
    public function debug($item1, $item2 = null)
    {
        var_dump($item1); die();
    }
}