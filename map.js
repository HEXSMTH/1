function initMap() {
        var location = {lat: 40.706, lng: -74.011};
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: location,
            gestureHandling: 'greedy',
            scrollwheel: false
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
