// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic',  ])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            console.log('test');
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .controller('GeoCtrl', function (  $scope) {
        $scope.myDo2 = function () {
        //
        //    console.log('do');
        //var watch = $cordovaGeolocation.watchPosition(options);
        //watch.promise.then(function () { /* Not  used */
        //    },
        //    function (err) {
        //        // error
        //    }, function (position) {
        //        var lat = position.coords.latitude;
        //        var long = position.coords.longitude;
        //        alert('do' + lat);
        //    });
        //
        //$cordovaGeolocation.clearWatch(watch.watchId);
        };
        // begin a watch
        var options = {
            frequency: 1000,
            timeout: 3000,
            enableHighAccuracy: true
        };

        // clear watch

    })

    .controller('MapCtrl', function ($scope, $ionicLoading) {
        $scope.mapCreated = function (map) {
            $scope.map = map;
        };

        $scope.myDo = function () {
            //$cordovaGeolocation
            //    .getCurrentPosition()
            //    .then(function (position) {
            //
            //        console.log(position);
            //        var lat = position.coords.latitude;
            //        var long = position.coords.longitude;
            //        alert('test' + lat)
            //    }, function (err) {
            //        alert('errro');
            //        console.log(err);
            //
            //        // error
            //    });
            console.log('test');
        };

        $scope.centerOnMe = function () {
            console.log("Centering");
            console.log($scope.map);
            if (!$scope.map) {
                return;
            }

            //$scope.loading = $ionicLoading.show({
            //    content: 'Getting current location...',
            //    showBackdrop: false
            //});

            navigator.geolocation.getCurrentPosition(function (pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                //$scope.loading.hide();
                alert('done'+pos.coords.latitude + 'long '+pos.coords.longitude)
            }, function (error) {
                alert('Unable to get location: ' + error.message);
            });
        };
    })

    .directive('map', function () {
        return {
            restrict: 'E',
            scope: {
                onCreate: '&'
            },
            link: function ($scope, $element, $attr) {
                function initialize() {
                    var mapOptions = {
                        center: new google.maps.LatLng(43.07493, -89.381388),
                        zoom: 16,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map($element[0], mapOptions);

                    $scope.onCreate({map: map});
                    //$scope.map = map;

                    // Stop the side bar from dragging when mousedown/tapdown on the map
                    google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
                        e.preventDefault();
                        return false;
                    });
                }

                if (document.readyState === "complete") {
                    initialize();
                } else {
                    google.maps.event.addDomListener(window, 'load', initialize);
                }
            }
        };
    });
