'use strict';

myApp.controller('ListController', function($scope, $http, $state, UserService){


  UserService.getUsers().then(function(result){
    $scope.users = result;
  }, function(error) {
    console.log(error);
  }).finally(function(){
    //this is only needed if you need to do some clean up
    //work with at the end of the $promise
  });

	$scope.edit = function(id){
		//alert('asdf'+id);
		$state.go('userslist.edit', {userId: id});
	};

  $scope.disp = function(id){
		//alert('asdf'+id);
		$state.go('userslist.profile', {userId: id});
	};

});
