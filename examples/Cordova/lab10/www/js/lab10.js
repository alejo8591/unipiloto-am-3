$(document).on('pagecreate', '#home', function(){

	console.log('Evento delegado `#home` OK');

	$('#take-picture').bind('click', function(){

        function onCameraSuccess(imageURI){
	        console.log(imageURI);

	        $('#url-picture').append('<span>' + imageURI + '</span>');

	        console.log('onCameraSuccess imageURI: ' + imageURI);
        }

        function onCameraError(cameraError){
	        $('#url-picture').append('<span>' + cameraError + '</span>');

	        console.log('onCameraError: ' + cameraError);
        }

		var options = {
            quality: 75,
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.FILE_URI,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 1024,
            targetHeight: 768
        };

		navigator.camera.getPicture(onCameraSuccess, onCameraError, options);
	});
});