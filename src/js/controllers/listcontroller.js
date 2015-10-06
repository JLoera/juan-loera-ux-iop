'use strict';

myApp.controller('ListController', function($scope, $http, $state, UserService){

  $scope.users = UserService.query();

	$scope.edit = function(id){
		//alert('asdf'+id);
		$state.go('edituser.list', {userId: id});
	};

});
