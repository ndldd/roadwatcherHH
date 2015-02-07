angular.module('setup', []).controller('SetupController', function ($http, $scope) {


    $scope.userdata = {
        email:   window.localStorage['email'] || '',
        username:   window.localStorage['username'] || ''


    };
    $scope.postData = function () {


        window.localStorage['username'] = $scope.userdata.username;
        window.localStorage['email'] = $scope.userdata.email;

//var name = window.localStorage['name'] || 'you';
//alert('Hello, ' + name);
    };
})