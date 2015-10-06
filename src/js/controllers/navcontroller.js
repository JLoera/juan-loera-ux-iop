myApp.controller('NavController', function($scope, $location){

    $scope.isActive = function (viewLocation) {
				var tempPath = $location.path();
				if(tempPath != '/newuser'){
					tempPath = '/';
				}
        return viewLocation === tempPath;
    };
});
