// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])  .controller('GeoCtrl', function($cordovaGeolocation) {

    console.log('hello');
  $cordovaGeolocation
    .getCurrentPosition()
    .then(function (position) {
          console.log(position);
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });

  // begin a watch
  var options = {
    frequency : 1000,
    timeout : 3000,
    enableHighAccuracy: true
  };

  var watch = $cordovaGeolocation.watchPosition(options);
  watch.promise.then(function()  { /* Not  used */ },
    function(err) {
      // error
    }, function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
  });

  // clear watch
  $cordovaGeolocation.clearWatch(watch.watchId)
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
