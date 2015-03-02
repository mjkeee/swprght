/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';
var appControllers = angular.module('appControllers', []);

appControllers.controller('SwipeController', function($scope, $http){
    $http.get('users/users.json').success(function(data){
        $scope.users = data;
    });
$scope.currentIndex = 0;

$scope.setCurrentUserIndex = function(index){
  $scope.currentIndex = index;  
};
      $scope.isCurrentUserIndex = function(index) {
    return $scope.currentIndex === index;
     };
    $scope.nextUser = function(){
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.users.length - 1;
    };
});


appControllers.controller('SettingsController', function($scope, $http){
$http.get('users/users.json').success(function(data){
        $scope.users = data;
    });

});
appControllers.controller('DetailsController', function($scope, $http){
$http.get('users/user.json').success(function(data){
              $scope.users = data;
        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentImageIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentImageIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.users.images.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.length.length - 1;
        };
    });

});

appControllers.controller('MessagesController', function($scope, $http){
$http.get('users/users.json').success(function(data){
        $scope.users = data;
    });
$scope.currentIndex = 0;
});

appControllers.controller('ProfileController', function($scope, $http){
$http.get('users/user.json').success(function(data){
        $scope.users = data;
        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentImageIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentImageIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.users.images.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.length.length - 1;
        };
    }); 
        
    });

appControllers.controller('AboutController', function($scope, $http){
$http.get('users/users.json').success(function(data){
        $scope.users = data;
    });

});