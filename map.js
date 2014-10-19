var map;
var toronto = new google.maps.LatLng(43.7, -79.4);

function initialize() {

  var roadAtlasStyles = [
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        { "saturation": -100 },
        { "lightness": -8 },
        { "gamma": 1.18 }
      ]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          { "saturation": -100 },
          { "gamma": 1 },
          { "lightness": -24 }
        ]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "administrative",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "transit",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "road",
        "stylers": [
          { "saturation": -100 },
          { lightness: -30}
        ]
    }, {
        "featureType": "administrative",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "landscape",
        "stylers": [
          { "saturation": -100 },
          { "lightness" : -25 }
        ]
    }, {
        "featureType": "poi",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {}];

    var mapOptions = {
      zoom: 14,
      center: toronto,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
      }
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var styledMapOptions = {};

    var usRoadMapType = new google.maps.StyledMapType(
        roadAtlasStyles, styledMapOptions);

    map.mapTypes.set('usroadatlas', usRoadMapType);
    map.setMapTypeId('usroadatlas');
  }

google.maps.event.addDomListener(window, 'load', initialize);
