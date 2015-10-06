myApp.controller('NavController', function($scope, $location){

    $scope.isActive = function (viewLocation) {
				var tempPath = $location.path();
				if(tempPath != '/userslist/new'){
					tempPath = '/';
				}
        return viewLocation === tempPath;
    };
});
