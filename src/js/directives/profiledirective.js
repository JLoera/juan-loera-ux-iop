'use strict';

myApp.directive('userProfile', function($templateCache) {
    return {
        restrict: 'E',
        template: $templateCache.get('profile.html'),
        replace: true
    };
});
