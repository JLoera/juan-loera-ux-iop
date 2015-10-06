'use strict';

myApp.controller('CreateController', function($scope, $http, $state, UserService){

  $scope.submit = function(){
		UserService.save({
			firstName: $scope.user.firstName,
			lastName: $scope.user.lastName,
			email: $scope.user.email,
			phone: $scope.user.phone
		},function(data) {
        // success
        alert('Success');
        $state.go('userslist.list');
     }, function(e) {
        // failure
        alert('Error');
     });
	};

});
