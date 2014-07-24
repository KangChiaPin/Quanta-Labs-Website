var quanta = new google.maps.LatLng(37.382434,-121.939316);
var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var start;

function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	var mapOptions = {
		zoom: 12,
		center: quanta,
		mapTypeId: google.maps.MapTypeId.TERRAIN
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

	directionsDisplay.setMap(map);
	directionsDisplay.setOptions( { suppressMarkers: true } );
}

function placeMarker(position, map) {
	start = new google.maps.Marker({
		position: position,
		  map: map,
		  icon: 'img/little guy.jpg'
	});
	calcRoute(position);

	google.maps.event.addListener(start, 'rightclick', function(e) {
		start.setMap(null);
		directionsDisplay.setMap(null);
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

	google.maps.event.addDomListener(window, 'load', initialize);
