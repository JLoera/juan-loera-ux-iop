'use strict';

myApp.directive('userNew', function($templateCache) {
    return {
        restrict: 'E',
        template: $templateCache.get('new.html'),
        replace: true
    };
});
