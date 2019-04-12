import GoogleMapField from './modules/GoogleMapField';

import '../scss/GoogleServicesPlugin.scss';

export default class GoogleServicesPlugin {
    constructor() {
        this.services = {
            'places': GoogleMapField,
        };
    }

    make(service, config) {
        return new this.services[service](config);
    }
}

(function($) {
    Garnish.$doc.ready(() => {
        Craft.GoogleServicesPlugin = new GoogleServicesPlugin();
    });
})(jQuery);