'use strict';

myApp.controller('CreateController', function($scope, $http, $state, UserService){

  $scope.submit = function(){

    UserService.addUser(
			$scope.user
    ).then(function(result){
      $state.go('userslist.list');
    }, function(error) {
      console.log(error);
    });
	};
});
