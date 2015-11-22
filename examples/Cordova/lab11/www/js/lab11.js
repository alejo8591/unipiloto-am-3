$(document).on('pagecreate', '#home', function(){

  console.log('`#home` OK');

});


/* Capture Audio */
$(document).on('pagecreate', '#audio', function(){

  console.log('`#audio` OK');

  $('#button-audio').bind('click', function(event){

    console.log('take audio');

    $('#capture-audio-results').html('<span>Capturando Audio</span>');

    var num_items = $('#num-items-audio').val();

    var duration = $('#duration-audio').val();

    navigator.device.capture.captureAudio(onCaptureAudioSuccess, onCaptureAudioError, {duration: duration, limit: num_items});

    event.preventDefault();
  
  });

});


/* Capture Audio Callbacks */
var onCaptureAudioSuccess = function(file_list){
  
  var i, len;

  len = file_list.length;

  if (len > 0) {
    
    $('#capture-audio-results').html('<h4>Resultados:</h4>');

    $('#capture-audio-results').append('<ul data-role="listview" id="capture-audio-results-list"></ul>');
    
    for (i = 0; i < len; i++) {
      
      $('#capture-audio-results-list').append(
      
        '<li>' + file_list[i].fullPath + '</li>' +
      
        '<li>' + file_list[i].name + '</li>'
      
      );
    }
  }
};

var onCaptureAudioError = function(error){
  
  var message_text;
  //Now build a message string based upon the
  //error returned by the API
  switch(error.code) {
    
    case CaptureError.CAPTURE_INTERNAL_ERR:
      message_text = "Internal error, the microphone failed to sound.";
      break;
    
    case CaptureError.CAPTURE_APPLICATION_BUSY:
      message_text = "The camera application or audio capture application is currently serving other capture request.";
      break;
   
    case CaptureError.CAPTURE_INVALID_ARGUMENT:
      message_text = "Invalid parameter passed to the API.";
      break;
    
    case CaptureError.CAPTURE_NO_MEDIA_FILES:
      message_text = "User likely cancelled the capture process.";
      break;
    
    case CaptureError.CAPTURE_NOT_SUPPORTED:
      message_text = "The requested operation is not supported on this device.";
      break;
    default:
      //Create a generic response, just in case the
      //following switch fails
      message_text = "Unknown Error (" + error.code + ")";
    
    }
    
    //Now tell the user what happened
    navigator.notification.alert(message_text, null, "Capture Error");
};


/* Capture Camera */
$(document).on('pagecreate', '#camera', function(){

  console.log('`#camera` OK');

  $('#button-camera').bind('click', function(event){

    console.log('take camera');

    $('#capture-camera-results').html('<span>Capturando Audio</span>');

    var num_items = $('#num-items-camera').val();

    navigator.device.capture.captureImage( onCaptureImageSuccess, onCaptureImageError, {limit: num_items});

    event.preventDefault();

  });

});


/* Capture Camera Callbacks */
var onCaptureImageSuccess = function(file_list){
  var i, len;

  len = file_list.length;

  if (len > 0) {
    $('#capture-camera-results').html('<h4>Resultados:</h4>');

    $('#capture-camera-results').append('<ul data-role="listview" id="capture-camera-results-list"></ul>');
    
    for (i = 0; i < len; i++) {
      
      $('#capture-camera-results-list').append(
        
        '<li>' + file_list[i].fullPath + '</li>' +
        
        '<li>' + file_list[i].name + '</li>'
     
      );
    }
  }
};

var onCaptureImageError = function(error){
  var message_text;
  //Now build a message string based upon the
  //error returned by the API
  switch(error.code) {
    
    case CaptureError.CAPTURE_INTERNAL_ERR:
      message_text = "Internal error, the microphone failed to sound.";
      break;
    
    case CaptureError.CAPTURE_APPLICATION_BUSY:
      message_text = "The camera application or camera capture application is currently serving other capture request.";
      break;
    
    case CaptureError.CAPTURE_INVALID_ARGUMENT:
      message_text = "Invalid parameter passed to the API.";
      break;
    
    case CaptureError.CAPTURE_NO_MEDIA_FILES:
      message_text = "User likely cancelled the capture process.";
      break;
    
    case CaptureError.CAPTURE_NOT_SUPPORTED:
      message_text = "The requested operation is not supported on this device.";
      break;
    
    default:
      //Create a generic response, just in case the
      //following switch fails
      message_text = "Unknown Error (" + error.code + ")";
    
    }
    //Now tell the user what happened
    navigator.notification.alert(message_text, null, "Capture Error");
};



/* Capture Video */
$(document).on('pagecreate', '#video', function(){

  console.log('`#video` OK');

  $('#button-video').bind('click', function(event){

    console.log('take video');

    $('#capture-video-results').html('<span>Capturando Audio</span>');

    var num_items = $('#num-items-video').val();

    var duration = $('#duration-video').val();

    navigator.device.capture.captureVideo(onCaptureVideoSuccess, onCaptureVideoError, {duration: duration, limit: num_items});

    event.preventDefault();
  });
});


/* Capture Video Callbacks */
var onCaptureVideoSuccess = function(file_list){
  var i, len;

  len = file_list.length;

  if (len > 0) {
    $('#capture-video-results').html('<h4>Resultados:</h4>');

    $('#capture-video-results').append('<ul data-role="listview" id="capture-video-results-list"></ul>');
    
    for (i = 0; i < len; i++) {
      
      $('#capture-video-results-list').append(
       
        '<li>' + file_list[i].fullPath + '</li>' +
       
        '<li>' + file_list[i].name + '</li>'
      );

    }
  }
};



var onCaptureVideoError = function(error){
  var message_text;
  //Now build a message string based upon the
  //error returned by the API
  switch(error.code) {
    
    case CaptureError.CAPTURE_INTERNAL_ERR:
      message_text = "Internal error, the microphone failed to sound.";
      break;
    
    case CaptureError.CAPTURE_APPLICATION_BUSY:
      message_text = "The video application or video capture application is currently serving other capture request.";
      break;
    
    case CaptureError.CAPTURE_INVALID_ARGUMENT:
      message_text = "Invalid parameter passed to the API.";
      break;
    
    case CaptureError.CAPTURE_NO_MEDIA_FILES:
      message_text = "User likely cancelled the capture process.";
      break;
    
    case CaptureError.CAPTURE_NOT_SUPPORTED:
      message_text = "The requested operation is not supported on this device.";
      break;
    
    default:
      //Create a generic response, just in case the
      //following switch fails
      message_text = "Unknown Error (" + error.code + ")";
  
  }
      //Now tell the user what happened
      navigator.notification.alert(message_text, null, "Capture Error");
};
