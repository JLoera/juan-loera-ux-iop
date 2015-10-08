'use strict';

myApp.directive('userList', function($templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'list.html',
        replace: true
    };
});
