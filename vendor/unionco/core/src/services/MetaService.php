<?php

namespace union\core\services;

use craft\elements\db\TagQuery;
use craft\elements\GlobalSet;

class MetaService
{
    /**
     * @var
     */
    protected $global;

    /**
     * @var
     */
    protected $fallBack = [
        'metaTitle' => '',
        'metaKeywords' => '',
        'metaDescription' => '',
    ];

    // Public Methods
    // =========================================================================


    public function __construct()
    {
        if (!isset($this->global)) {
            $this->global = $this->getFallback();
        }

        if ($this->global) {
            $this->fallBack = [
                'metaTitle' => $this->global->metaTitle,
                'metaKeywords' => implode(',', $this->global->metaKeywords->all()),
                'metaDescription' => $this->global->metaDescription
            ];
        }
    }

    /**
     * Get title from context
     *
     * @param context array
     * @return mixed
     */
    public function title($context)
    {
        if($title = $context['metaTitle'] ?? null) {
            return $title;
        }

        $entry = $this->getEntry($context);

        if (!empty($entry['metaTitle'])) {
            return $entry['metaTitle'];
        } elseif ($entry) {
            return $entry['title'] . ' | ' . $context['siteName'];
        }

        if ($this->fallBack['metaTitle']) {
            return $this->fallBack['metaTitle'] . ' | ' . $context['siteName'];
        }

        return $context['siteName'];
    }

    /**
     * Get keywords from context
     *
     * @param context array
     * @return mixed
     */
    public function keywords($context)
    {
        if($keywords = $context['metaKeywords'] ?? null) {
            return $keywords;
        }

        $entry = $this->getEntry($context);

        if($entry && isset($entry->metaKeywords)) {
            $keywordsFieldValue = count($entry->metaKeywords) ? $entry->metaKeywords : $this->fallBack['metaKeywords'];

            if(is_string($keywordsFieldValue)) {
                return $keywordsFieldValue;
            } else {
                $keywordTitles = [];

                foreach($keywordsFieldValue->all() as $keyword) {
                    $keywordTitles[] = $keyword->title;
                }

                return implode(',', $keywordTitles);
            }
        }

        return $this->fallBack['metaKeywords'];
    }

    /**
     * Get description from context
     *
     * @param context array
     * @return mixed
     */
    public function description($context)
    {
        if($description = $context['metaDescription'] ?? null) {
            return $description;
        }

        $page = $this->getEntry($context) ?? null;

        return !empty($page['metaDescription']) ? $page['metaDescription'] : $this->fallBack['metaDescription'];
    }

    /**
     * Get ogImageUrl from context
     *
     * @param context array
     * @return mixed
     */
    public function ogImageUrl($context)
    {
        if ($ogImageUrl = $context['metaOgImageUrl'] ?? null) {
            return $ogImageUrl;
        }

        if ($elementCriteriaModel = $this->getEntry($context, 'heroImage')) {
            if ($assetFileModel = $elementCriteriaModel->one()) {
                return $assetFileModel->getUrl();
            }
        }

        return '';
    }

    /**
     * Get global
     *
     * @return mixed
     */
    protected function getFallback()
    {
        $global = GlobalSet::find()
            ->handle('seo')
            ->one();

        if (!$global) {
            return null;
        }

        return $global;
    }

    /**
     * Get entry from context
     *
     * @param context array
     * @param attribute string
     * @return mixed
     */
    protected function getEntry($context, $attribute = null)
    {
        $entry = $this->entry ?? $context['entry'] ?? null;

        if ($entry) {
            if ($attribute) {
                if (isset($entry->{$attribute})) {
                    return $entry->{$attribute};
                }
            } else {
                return $entry;
            }
        }

        $category = $context['category'] ?? null;

        if ($category) {
            if ($attribute) {
                if (isset($category->{$attribute})) {
                    return $category->{$attribute};
                }
            } else {
                return $category;
            }
        }

        return null;
    }
}