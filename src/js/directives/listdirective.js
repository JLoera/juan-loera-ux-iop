myApp.directive('userList', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/list.html',
        replace: true
    }
});
