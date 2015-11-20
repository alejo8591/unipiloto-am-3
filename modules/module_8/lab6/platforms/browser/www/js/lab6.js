(function(){
  document.addEventListener("deviceready", onDeviceReady, false);

var watchID;

function onHeadingSuccess(heading){

    var hi = document.getElementById('heading-info');

    console.log('onHeadingSuccess OK');

    var data = Math.round(heading.magneticHeading);

    hi.innerHTML = '<b>Heading:</br> ' + data + '<span>Grados</span>';

     console.log($('#compass').rotate(-data));

    $('#compass').rotate(-data);
}

function onHeadingError(compassError) {
    console.log('onHeadingError OK :(');

    navigator.compass.clearWatch(watchID);

    var hi = document.getElementById('heading-info');

    hi.innerHTML = '';

    if (compassError.code == CompassError.COMPASS_NOT_SUPPORTED) {

        hi.innerHTML = '<b>Bruluja no disponible</b>';
        alert('Bruluja no disponible');

    } else if (compassError.code == CompassError.COMPASS_INTERNAL_ERR) {

        hi.innerHTML = '<b>Compass Internal Error</b>';
        alert('Compass Internal Error');

    } else {

        hi.innerHTML = '<b>Error indeterminado o no reconocido por el API</b>';
        alert('Error indeterminado o no reconocido por el API');
    }
}


function onDeviceReady(){
    var options = {frequency:250};

    watchID = navigator.compass.watchHeading(onHeadingSuccess, onHeadingError, options);

}
})();