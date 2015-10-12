'use strict';

myApp.controller('ProfileController', function($scope, $http, $stateParams, $state, toaster, UserService){

	UserService.getUsers().then(function(result){
    $scope.users = result;

    angular.forEach($scope.users,function(value,index){

      if(value._id === $stateParams.userId){
        $scope.user = value;
      }
    });

  }, function(error) {
    console.log(error);
  });

	$scope.del = function(id){

		UserService.deleteUser({
      user: $stateParams.userId
		}).then(function(result){
      toaster.pop('success', 'Deleted!', 'User deleted');
      $state.go('list');
    }, function(error) {
      console.log(error);
    });
	};

});
