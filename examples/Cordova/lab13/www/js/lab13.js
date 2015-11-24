$(document).on('pagecreate', '#home', function(){

	console.log('Evento delegado `#home` OK');

	var default_lat_lng = new google.maps.LatLng(34.0944344, -115.328765);


	if (navigator.geolocation) {

		var success = function(position){

			console.log('success');

			drawMap(new google.maps.LatLng(position.coords.latitude, pos.coords.longitude));
		};

		var fail = function(error){

			console.log(fail);

			drawMap(default_lat_lng);
		
		};

		var options = {

			maximumAge: 50000,
			enableHighAccuracy: true,
			timeout: 6000
		};

		navigator.geolocation.getCurrentPosition(success, fail, options);

	} else {

		drawMap(default_lat_lng);
	}


	var drawMap = function(latLng){
		
		console.log('drawMap');

		console.log(latLng);

		var options = {
			zoom:10,
			center: latLng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'), options);

		var marker = new google.maps.Marker({
			position: latLng,
			map: map,
			title: 'Mi ubicación'
		});
	};
});