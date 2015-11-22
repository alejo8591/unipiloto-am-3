var info = document.getElementById('acceleration-info');

console.log('Escuchando un evento del tipo click');

function getAcceleration(){
    console.log('getAcceleration -> Ok');
    info.innerHTML = '';
    // Obteniendo la orientacion del dispositivo
    alert('GetAcceleration Ok!');
    navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onAccelerationError);
}

function onAccelerationSuccess(acceleration){
    var date = new Date(acceleration.timestamp);
    info.innerHTML = '<b>Aceleración en X: ' + acceleration.x + '<br />' +
                     '<b>Aceleración en Y: ' + acceleration.y + '<br />' +
                    '<b>Aceleración en Z: ' + acceleration.z + '<br />' +
                     '<b>timestamp: ' + date.toLocaleString() + '<br />';
}

function onAccelerationError(){
    console.log('Error en el acelerometro');
    alert('Error en el acelerometro');
}