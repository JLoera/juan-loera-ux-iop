'use strict';

myApp.controller('NavController', function($scope, $location){

    $scope.isActive = function (viewLocation) {
				var tempPath = $location.path();
				if(tempPath !== '/new'){
					tempPath = '/';
				}
        return viewLocation === tempPath;
    };
});
