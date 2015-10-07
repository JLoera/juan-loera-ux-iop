myApp.directive('userNew', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/new.html',
        replace: true
    }
});
