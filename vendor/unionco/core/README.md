![UNIONCore](https://imgur.com/zT6tDGz.png)

![Craft](https://img.shields.io/badge/craft-v3-red.svg) ![PHP](https://img.shields.io/badge/php-v7.0-blue.svg)

## Welcome to UNION Core for CraftCMS 3. 
Although still in beta lots of plugins out there are following suit. UNION Core in CraftCMS 3 will be very different and basically a complete rework but 95% of the functionality still exist. 

UNION Core offers a way to attach behaviors to your elements using Craft's own $element->attachBehavior() method. Supplies a global variable that can access your services directly from your templates as well as a few built in behaviors and twig filters for fun.

With CraftCMS 3 and the new way to install plugins we had to come up with way to easily allow you the developer to extend our plugin as before but without needing to dig into the vendor directory. Although possible, we would hate for you to have to do that. Instead, a unionco.php config file will communicate to the plus core code how it will be "extended" on init. More information on this below.

## Installation
### To install UNION Core, just follow these steps:
- cd into your project's direction
- run ```composer require unionco\core```
- Go to Settings > Plugins from your Craft control panel and enable the plugin

### Config
- Lastly, lets connect it all by creating a unionco.php file in main craft config directory and it *should* look something like this...
    ```
    <?php
    return [
        "remotes" => [
            "environment-name" => [
                'username' => '',
                'host' => '',
                'root' => '',
                'backupDirectory' => '',
                'port' => 22,
                'phpPath' => ''
            ]
        ]
    ];
    ```

### Basic Usage
- #### Out of the box
    - AssetBehavior
        - Craft Twig Standard Way ```{{ entry.assetHandle.one.getUrl() }} ```
        - New Way ```{{ entry._assetUrl('assetHandle') }}```
        - Optional ```{{ entry._assetUrl('assetHandle', 'squareTransformHandle') }}```
        - Eager loaded resources would use ```{{ entry._eAssetUrl('assetHandle') }}```
    - Video Url Filter
        - Currently supports vimeo and youtube urls
        - Usage:: ```{{ entry.videoUrl | videoEmbedUrl }}```

### Advanced Usage
- #### Behaviors
    Behaviors are all bound to the handle of the element.
    - Entries: Entry -> Section -> Handle
    - Categories: Category -> Group -> Handle
    - GlobalSet: Global -> Handle
    - Matrixblock: MatrixBlock -> Field -> Handle
    
    Create a file for the element in question (union the word behavior). Example for the Home (single).
    ```
    <?php 
    namespace union/behaviors/entries
    use unionco\core\Plugin; //if you need to access the core plugin
    use unionco\core\behaviors\entries\BaseEntryBehavior;
    
    class HomeBehavior extends BaseEntryBehavior
    {
        public function _somethingInteresting()
        {
            return 'something interesting';
        }
    }
    ```
    I wont go into tons of detail on how to add behaviors or why we do so, UNIONCore is just the facilitator. Reference the CraftCMS docs or Yii2 docs to get more details about behaviors.
    
- #### Services
    Services will map 1/1 to how services work inside the core plugin and docs for that are already available in the CraftCMS docs github page [Docs](https://github.com/craftcms/docs). The one added benefit of Plus here is the plus variable and its ability to access any of your services from within your templates without needing to create new variables and/or twig extensions. I will give two examples here...
        
    Service will look like this
    ```
    <?php
    namespace union\services;
    
    use Craft;
    use craft\base\Component;
    use unionco\core\Plugin;
    
    class QuoteService extends Component
    {
        public function getRandomQuote()
        {
            // code here
        }
    }
    ```
    
    Here you have the normal php way of accessing your service:
    ```
    <?php 
    namespace union/behaviors/entries
    use unionco\core\Plugin; //if you need to access the core plugin
    use unionco\core\behaviors\entries\BaseEntryBehavior;
    
    class HomeBehavior extends BaseEntryBehavior
    {
        public function _somethingInteresting()
        {
            $quote = Plugin::$plugin->quote->getRandomQuote();
            return $quote;
        }
    }
    ```
    
    In twig w/UNION Core
    ```
    {{ union('quote').getRandomQuote() }}
    ```
    
    