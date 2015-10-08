'use strict';

myApp.controller('ListController', function($scope, $http, $state, UserService){

  UserService.getUsers().then(function(result){
    $scope.users = result;
  }, function(error) {
    console.log(error);
  });

	$scope.edit = function(id){
		$state.go('edit', {userId: id});
	};

  $scope.disp = function(id){
		$state.go('profile', {userId: id});
	};

});
