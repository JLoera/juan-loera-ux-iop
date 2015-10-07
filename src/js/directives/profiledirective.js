myApp.directive('userProfile', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/profile.html',
        replace: true
    }
});
