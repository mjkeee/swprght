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

appControllers.controller('SignUpController', function () {
        var ctrl = this,
            newCustomer = { email:'', userName:'', password:'' };

        var signup = function () {
            if( ctrl.signupForm.$valid) {
                ctrl.showSubmittedPrompt = true;
                clearForm();
            }
        };

        var clearForm = function () {
            ctrl.newCustomer = { email:'', userName:'', password:'' }
            ctrl.signupForm.$setUntouched();
            ctrl.signupForm.$setPristine();
        };

        var getPasswordType = function () {
            return ctrl.signupForm.showPassword ? 'text' : 'password';
        };

        var toggleEmailPrompt = function (value) {
            ctrl.showEmailPrompt = value;
        };

        var toggleUsernamePrompt = function (value) {
            ctrl.showUsernamePrompt = value;
        };

        var hasErrorClass = function (field) {
            return ctrl.signupForm[field].$touched && ctrl.signupForm[field].$invalid;
        };

        var showMessages = function (field) {
            return ctrl.signupForm[field].$touched || ctrl.signupForm.$submitted
        };

        ctrl.showEmailPrompt = false;
        ctrl.showUsernamePrompt = false;
        ctrl.showSubmittedPrompt = false;
        ctrl.toggleEmailPrompt = toggleEmailPrompt;
        ctrl.toggleUsernamePrompt = toggleUsernamePrompt;
        ctrl.getPasswordType = getPasswordType;
        ctrl.hasErrorClass = hasErrorClass;
        ctrl.showMessages = showMessages;
        ctrl.newCustomer = newCustomer;
        ctrl.signup = signup;
        ctrl.clearForm = clearForm;
    })
    .directive('validatePasswordCharacters', function () {
        return {
            require: 'ngModel',
            link: function ($scope, element, attrs, ngModel) {
                ngModel.$validators.lowerCase = function (value) {
                    var pattern = /[a-z]+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.upperCase = function (value) {
                    var pattern = /[A-Z]+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.number = function (value) {
                    var pattern = /\d+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.specialCharacter = function (value) {
                    var pattern = /\W+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.eightCharacters = function (value) {
                    return (typeof value !== 'undefined') && value.length >= 8;
                };
            }
        }
    });
appControllers.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'A',
            url: 'one.tpl.html'
        }, {
            title: 'B',
            url: 'two.tpl.html'
        }, {
            title: 'C',
            url: 'three.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);
appControllers.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'A',
            url: 'one.tpl.html'
        }, {
            title: 'B',
            url: 'two.tpl.html'
        }, {
            title: 'C',
            url: 'three.tpl.html'
    },
    {
        title:'D',
        url: 'four.tpl.html'
    },
    {
        title: 'E',
        url: 'five.tpl.html'
    },
    {
        title: 'F',
        url: 'six.tpl.html'
    },
    {
        title: 'G',
        url: 'seven.tpl.html'
    },
    {
        title: 'H',
        url:'eight.tpl.html'
    },
    {
        title: 'I',
        url: 'nine.tpl.html'
    },
    {
        title: 'J',
        url: 'ten.tpl.html'
    },
    {
        title: 'K',
        url:'eleven.tpl.html'
    },
    {
        title: 'L',
        url: 'twelve.tpl.html'
    },
    {
        title: 'M',
        url: "thirteen.tpl.html"
    }, 
    {
        title: 'N',
        url: 'fourteen.tpl.html'
    }, 
    {
        title: 'O',
        url: 'fivteen.tpl.html'
    },
    {
        title: 'P',
        url: 'sixteen.tpl.html'
    },
    {
        title: 'Q',
        url: 'seventeen.tpl.html'
    },
    {
        title: 'R',
        url:'eighteen.tpl.html'
    },
    {
        title: 'S',
        url: 'nineteen.tpl.html'
    },
    {
        title: 'T',
        url: 'twenty.tpl.html'
    },
    {
        title: 'U',
        url:'twentyone.tpl.html'
    },
    {
        title: 'V',
        url: 'twentytwo.tpl.html'
    },
    {
        title: 'W',
        url: "twentythree.tpl.html"
    }, 
    {
        title: 'X',
        url: 'twentyfour.tpl.html'
    },
    {
        title: 'Y',
        url:'twentyfive.tpl.html'
    },
    {
        title: 'Z',
        url: 'twentysix.tpl.html'
    }
    ];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);