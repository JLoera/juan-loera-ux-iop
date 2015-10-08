'use strict';

myApp.controller('ProfileController', function($scope, $http, $stateParams, $state, UserService){

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
      alert('Successfully deleted user!');
      $state.go('list');
    }, function(error) {
      console.log(error);
    });
	};

});
