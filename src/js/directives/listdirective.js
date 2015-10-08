myApp.directive('userList', function($templateCache) {
    return {
        restrict: 'E',
        template: $templateCache.get("list.html"),
        replace: true
    }
});
