myApp.directive('userEdit', function($templateCache) {
    return {
        restrict: 'E',
        template: $templateCache.get("edit.html"),
        replace: true
    }
});
