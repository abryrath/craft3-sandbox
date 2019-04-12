import { googlePlacesFieldMap as fieldMap } from './FieldMaps';

export default class GoogleMapField {
    constructor(config) {
        this.key = config.key || false;
        this.el = config.el || false;
        this.settings = config.settings || {};
        
        console.log('Google Map Field ctr');
        if (!this.key) {
            GoogleMapField.fail('Missing API Key!');
            return;
        }

        this.getPlaceById = this.getPlaceById.bind(this);
        this.loadGoogleApi = this.loadGoogleApi.bind(this);
        this.loadGeocoder = this.loadGeocoder.bind(this);
        this.autoCompleteListener = this.autoCompleteListener.bind(this);
        this.placeChangedHandler = this.placeChangedHandler.bind(this);

        this.key = this.key.replace(/\s/g, '');
        //this.settings = settings;
        this.map = null;
        this.autocomplete = null;
        this.geocoder = null;
        this.card = null;
        this.input = null;
        this.mapCenter = null;
        this.marker = null;
        this.places = null;

        const _this = this;

        setTimeout(() => {
            this.loadGoogleApi()
                .then(this.loadGeocoder);
        }, 1000);


        if (document.getElementById('tabs')) {
            [].slice.call(
                document.getElementById('tabs').getElementsByTagName('a')
            ).map(el => {
                el.addEventListener('click', () => {
                    const x = this.map.getZoom(),
                        c = this.map.getCenter();

                    setTimeout(function () {
                        google.maps.event.trigger(this.map, 'resize');
                        this.map.setZoom(x);
                        this.map.setCenter(c);
                    }, 1);
                });
            });
        }
        return;
    }

    loadGeocoder() {
        console.log('loadGeocoder');
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
                address: this.settings.center
            },
            (results, status) => {
                console.log(results, status);
                if (status == 'OK') {
                    this.mapCenter = results[0].geometry.location;
                    this.loadGoogleMap();
                    this.autoCompleteListener();

                    if (this.settings.placeId) {
                        this.places = new google.maps.places.PlacesService(this.map);
                        this.getPlaceById(this.settings.placeId);
                    }
                } else {
                    GoogleMapField.fail(`Couldn't geocode ${this.settings.center}`);
                    return;
                }
            }
        );
    }

    getPlaceById(placeId) {
        this.places.getDetails({
            placeId: placeId
        }, (place, status) => {
            if (status == 'OK') {
                this.setMarker(place);
                jQuery(this.input).val(place.name);
            }
        });
    }

    completeEntry(place) {
        for (var i in fieldMap()) {
            var field = fieldMap()[i];
            if (typeof field.api === 'function') {
                var result = field.api(place);
                if (field.input) {
                    jQuery(field.input).val(result);
                }
            } else {
                jQuery(field.input).val(place[field.api]);
            }
        }
    }

    setMarker(place) {
        this.marker.setVisible(false);

        if (!place.geometry) {
            GoogleMapField.fail(`No details available for input: '${place.name}'`);
            return;
        }

        if (place.geometry.viewport) {
            this.map.fitBounds(place.geometry.viewport);
        } else {
            this.map.setCenter(place.geometry.location);
            this.map.setZoom(17); // Why 17? Because it looks good.
        }

        this.marker.setPosition(place.geometry.location);
        this.marker.setVisible(true);
    }

    autoCompleteListener() {
        this.autocomplete.addListener('place_changed', this.placeChangedHandler);
    }

    placeChangedHandler() {
        let place = this.autocomplete.getPlace();
        console.log(place);
        this.setMarker(place);

        if (this.settings.fillEntry) {
            this.completeEntry(place);
        } else {
            var f = this.el.split('-')[1];
            jQuery(`input[id="${this.el}"]`).val(place.place_id);
        }
    }

    loadGoogleMap() {
        let mapOptions = {
            zoom: 16,
            center: this.mapCenter
        };

        var map = document.querySelector('[google-map]');
        this.map = new google.maps.Map(map, mapOptions);

        // set marker
        this.marker = new google.maps.Marker({
            map: this.map,
            position: this.mapCenter
        });

        // controls
        this.card = jQuery('.googlemapfield-card').get(0);
        this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.card);

        // autocomplete
        this.input = jQuery('.autocomplete').get(0);
        this.autocomplete = new google.maps.places.Autocomplete(this.input, this.settings.autocomplete);
        this.autocomplete.bindTo('bounds', this.map);
    }

    loadGoogleApi() {
        return new Promise((resolve, reject) => {
            if (typeof window.google !== 'undefined' || window.simpleMapsLoadingGoogle == true) {
                console.log('Deferring');
                resolve('Loaded');
                return;
            }

            const gmjs = document.createElement('script');
            gmjs.type = 'text/javascript';
            gmjs.setAttribute('async', true);
            gmjs.setAttribute('defer', true);
            gmjs.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=' + this.key;
            gmjs.onload = function () {
                resolve('loaded');
            };
            document.body.appendChild(gmjs);
        })
    }

    static fail(message) {
        if (!window.Craft) {
            return;
        }

        Craft.cp.displayError('<strong>GoogleMapField:</strong> ' + message);
        if (window.console) {
            console.error.apply(console, [
                '%GoogleMapField: %c' + message,
                'font-weight:bold;',
                'font-weight:normal;'
            ]);
        }
    }
}