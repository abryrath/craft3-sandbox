<?php

namespace union\core\services\migrate;

use Craft;
use craft\elements\Asset;
use craft\fields\Assets as AssetsField;
use craft\helpers\Assets;
use Exception;

class AssetService
{
    protected $fieldId = null;
    protected $folderId = null; // optional with fieldId and elementId
    protected $elementId = null;

    public function importFile($url, $_fileName = null, $defaultUrl = null)
    {
        // ensure remote file exists
        if (!$this->webFileExists($url)) {
            if ($defaultUrl) {
                $url = $defaultUrl;
            } else {
                throw new Exception('Web File Does Not Exist');
            }
        }

        // download remote file
        $fileName = $_fileName ?? Assets::prepareAssetName($url);
        $tempPath = Craft::$app->getPath()->getTempPath().DIRECTORY_SEPARATOR.$fileName;

        save_remote_file($url, $tempPath);

        if (empty($this->folderId) && (empty($this->fieldId) || empty($this->elementId))) {
            throw new Exception('No target destination provided for uploading');
        }

        $assets = Craft::$app->getAssets();

        if (empty($this->folderId)) {
            $field = Craft::$app->getFields()->getFieldById((int)$this->fieldId);

            if (!($field instanceof AssetsField)) {
                throw new Exception('The field provided is not an Assets field');
            }

            $element = $this->elementId ? Craft::$app->getElements()->getElementById((int)$this->elementId) : null;
            $this->folderId = $field->resolveDynamicPathToFolderId($element);
        }

        if (empty($this->folderId)) {
            throw new Exception('The target destination provided for uploading is not valid');
        }

        $folder = $assets->findFolder(['id' => $this->folderId]);

        if (!$folder) {
            throw new Exception('The target folder provided for uploading is not valid');
        }

        $asset = new Asset();
        $asset->tempFilePath = $tempPath;
        $asset->filename = $fileName;
        $asset->newFolderId = $folder->id;
        $asset->volumeId = $folder->volumeId;
        $asset->avoidFilenameConflicts = true;
        $asset->setScenario(Asset::SCENARIO_CREATE);

        try {
            $result = Craft::$app->getElements()->saveElement($asset);
        } catch(Exception $e) {
            return null;
        }

        // In case of error, let user know about it.
        if (!$result) {
            $errors = $asset->getFirstErrors();

            throw new Exception('Failed to save the Asset:' . implode(";\n", $errors));
        }

        if ($asset->conflictingFilename !== null) {
            $conflictingAsset = Asset::findOne(['folderId' => $folder->id, 'filename' => $asset->conflictingFilename]);

            return (object) [
                'conflict' => Craft::t('app', 'A file with the name “{filename}” already exists.', ['filename' => $asset->conflictingFilename]),
                'assetId' => $asset->id,
                'filename' => $asset->conflictingFilename,
                'conflictingAssetId' => $conflictingAsset ? $conflictingAsset->id : null
            ];
        }

        return (object) [
            'success' => true,
            'filename' => $asset->filename,
            'assetId' => $asset->id,
        ];
    }

    public function setElementId($elementId)
    {
        $this->elementId = $elementId;

        return $this;
    }

    public function setFieldId($fieldId)
    {
        $this->fieldId = $fieldId;

        return $this;
    }

    public function setFolderId($folderId)
    {
        $this->folderId = $folderId;

        return $this;
    }

    public function webFileExists($url)
    {
        $responseCode = get_remote_headers($url);

        return $responseCode == 200;
    }
}