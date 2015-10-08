'use strict';

myApp.directive('userEdit', function($templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'edit.html',
        replace: true
    };
});
