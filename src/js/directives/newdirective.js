'use strict';

myApp.directive('userNew', function($templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'new.html',
        replace: true
    };
});
