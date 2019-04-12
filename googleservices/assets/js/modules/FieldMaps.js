const googlePlacesFieldMap = () => {
    return [
        { api: 'name', input: '[name="fields[googlePlace][name]"]'},
        { api: 'place_id', input: '[name="fields[googlePlace][placeId]"]' },
        { api: 'formatted_address', input: '[name="fields[googlePlace][formattedAddress]"]' },
        { api: 'formatted_phone_number', input: '[name="fields[googlePlace][formattedPhone]"]' },
        { api: 'rating', input: '[name="fields[googlePlace][rating]"]' },
        //{ api: 'url', input: '[name="fields[placeUrl]"]' },
        //{ api: 'website', input: '[name="fields[website]"]' },
        // { api: function(place) {
        //     let placePhotos = document.querySelector('#fields-placePhotos');
        //     if (!placePhotos) {
        //         return;
        //     }
        //     placePhotos.querySelectorAll('.delete.icon').forEach(node => node.dispatchEvent(new Event('click')));
        //     var table = $('#fields-placePhotos').data('editable-table');
        //     table.initialize();
        //     getPhotos(place.place_id).then(function(photos) {
        //         (photos || []).forEach(function (photo) {
        //             table.addRow();
        //             table.$table.find('tr:last :input').val(photo);
        //         });
        //     });
        // }},
        { api: function(place) {
            let reviewListing = document.querySelector('[name="fields[googlePlace][reviewsJson]"]');
            if (!reviewListing) {
                return;
            }
            //reviewListing.querySelectorAll('.delete.icon').forEach(node => node.dispatchEvent(new Event('click')));
            // var table = $('#fields-reviewListing').data('editable-table');
            // table.initialize();
            // (place.reviews || []).forEach(function(review) {

            // });
            reviewListing.value = JSON.stringify(place.reviews);
            //     table.addRow();
            //     table.$table.find('tr:last [name$="[col1]"]').val(review.author_name); // author name
            //     table.$table.find('tr:last [name$="[col2]"]').val(review.profile_photo_url); // author image
            //     table.$table.find('tr:last [name$="[col3]"]').val(removeEmoji(review.text)); // text
            //     table.$table.find('tr:last [name$="[col4]"]').val(review.rating); // written date
            //     table.$table.find('tr:last [name$="[col5]"]').val(review.relative_time_description); // rating
            // })
        }},
        // { api: function(place) {
        //     if (place.opening_hours) {
        //         return JSON.stringify(place.opening_hours.periods);    
        //     }
        //     return '';
        // }, input: '[name="fields[hours]"]' },
        { api: function(place) {
            return place.address_components.filter(function(component){
                return component.types.includes('locality');
            })[0].long_name;
        }, input: '[name="fields[googlePlace][city]"]' },
        { api: function(place) {
            return place.address_components.filter(function(component){
                return component.types.includes("administrative_area_level_1");
            })[0].short_name;
        }, input: '[name="fields[googlePlace][state]"]' },
        { api: function(place) {
            return place.address_components.filter(function(component){
                return component.types.includes("postal_code");
            })[0].short_name;
        }, input: '[name="fields[googlePlace][postalCode]"]' },
        { api: function(place) {
            return place.geometry.location.lat();
        }, input: '[name="fields[googlePlace][latitude]"]'},
        { api: function(place) {
            return place.geometry.location.lng();
        }, input: '[name="fields[googlePlace][longitude]"]'},
    ];
}

export { googlePlacesFieldMap };