var quanta = new google.maps.LatLng(37.3819142,-121.9405774);
var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var start;

var style = [{"elementType":"labels","stylers":[{"visibility":"off"},{"color":"#f49f53"}]},{"featureType":"landscape","stylers":[{"color":"#f9ddc5"},{"lightness":-7}]},{"featureType":"road","stylers":[{"color":"#813033"},{"lightness":43}]},{"featureType":"poi.business","stylers":[{"color":"#645c20"},{"lightness":38}]},{"featureType":"water","stylers":[{"color":"#1994bf"},{"saturation":-69},{"gamma":0.99},{"lightness":43}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#f19f53"},{"weight":1.3},{"visibility":"on"},{"lightness":16}]},{"featureType":"poi.business"},{"featureType":"poi.park","stylers":[{"color":"#645c20"},{"lightness":39}]},{"featureType":"poi.school","stylers":[{"color":"#a95521"},{"lightness":35}]},{},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#813033"},{"lightness":38},{"visibility":"off"}]},{},{},{},{},{},{},{},{},{},{},{},{"elementType":"labels"},{"featureType":"poi.sports_complex","stylers":[{"color":"#9e5916"},{"lightness":32}]},{},{"featureType":"poi.government","stylers":[{"color":"#9e5916"},{"lightness":46}]},{"featureType":"transit.station","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","stylers":[{"color":"#813033"},{"lightness":22}]},{"featureType":"transit","stylers":[{"lightness":38}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#f19f53"},{"lightness":-10}]},{},{},{}];

var style2 = [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }];
$(".toggle-map").click(function(){
	if($("#map-container").is(":hidden")){
		$("#map-container").slideDown( "slow" ,function initialize() {
			directionsDisplay = new google.maps.DirectionsRenderer();
			var mapOptions = {
				zoom: 11,
				center: quanta,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				//styles: style,
				//disableDefaultUI: true,
		        //scrollwheel: false,
		        //draggable: false
			};
		
			map = new google.maps.Map(document.getElementById('map-canvas'),
					mapOptions);
		
			var image = 'img/map_logo.png';
			var beachMarker = new google.maps.Marker({
				position: quanta,
				map: map,
				icon: image
			});
		
		
			google.maps.event.addListener(map, 'click', function(e) {
				if(start){
					start.setMap(null);
					placeMarker(e.latLng, map);
				} else{
					placeMarker(e.latLng, map);
				}
			});
		
			directionsDisplay.setOptions( { suppressMarkers: true } );
			
			
		});
		
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	} else{
		$("#map-container").slideUp();
	}
});


function placeMarker(position, map) {
	start = new google.maps.Marker({
		position: position,
		  map: map,
		  icon: 'img/little guy.jpg',
		  draggable: true
	});
	calcRoute(position);
	directionsDisplay.setMap(map);

	google.maps.event.addListener(start, 'dragend', function(e) {
		calcRoute(e.latLng);
		directionsDisplay.setMap(map);
	});

	google.maps.event.addListener(start, 'rightclick', function(e) {
		start.setMap(null);
		directionsDisplay.setMap(null);
		map.setCenter(quanta);
		map.setZoom(11);
	});
}
function calcRoute(start) {	
	var request = {
		origin:start,
		destination:quanta,
		travelMode: google.maps.TravelMode.DRIVING
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		}
	});
}

//google.maps.event.addDomListener(window, 'load', initialize);
