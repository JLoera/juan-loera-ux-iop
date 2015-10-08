myApp.directive('userProfile', function() {
    return {
        restrict: 'E',
        template: $templateCache.get("profile.html"),
        replace: true
    }
});
