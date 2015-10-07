'use strict';

myApp.controller('ProfileController', function($scope, $http, $stateParams, $state, UserService){

	UserService.getUsers().then(function(result){
    $scope.users = result;

    angular.forEach($scope.users,function(value,index){

      if(value._id == $stateParams.userId){
        $scope.user = value;
      };
    });

  }, function(error) {
    console.log(error);
  }).finally(function(){
    //this is only needed if you need to do some clean up
    //work with at the end of the $promise
  });

	$scope.del = function(id){

		UserService.deleteUser({
      user: $stateParams.userId
		}).then(function(result){
      alert('Successfully deleted user!');
      $state.go('userslist.list');
    }, function(error) {
      console.log(error);
    }).finally(function(){
      //this is only needed if you need to do some clean up
      //work with at the end of the $promise
    });
	};

});
