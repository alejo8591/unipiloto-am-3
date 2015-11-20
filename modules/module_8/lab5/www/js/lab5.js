angular.module('lab5', ['ngCordova'])

.controller('lab5Controller', function($scope, $cordovaDeviceMotion){

    // watch Acceleration
  var options = { frequency: 2000 };

  document.addEventListener("deviceready", function () {

    var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        $scope.x = result.x;
         $scope.y = result.y;
         $scope.z = result.z;
         $scope.time_stamp  = result.timestamp;
    });


    /*watch.clearWatch();
    // OR
    $cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        // success
        }, function (error) {
        // error
      });*/

  }, false);

    
});