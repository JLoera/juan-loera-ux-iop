'use strict';

myApp.directive('userProfile', function($templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'profile.html',
        replace: true
    };
});
