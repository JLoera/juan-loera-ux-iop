'use strict';

myApp.controller('CreateController', function($scope, $http, $state, toaster, UserService){

  $scope.submit = function(){

    UserService.addUser(
			$scope.user
    ).then(function(result){
      toaster.pop('success', 'Success!', 'User created');
      $state.go('list');
    }, function(error) {
      console.log(error);
    });
	};
});
