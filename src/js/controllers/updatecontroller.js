'use strict';

myApp.controller('UpdateController', function($scope, $http, $stateParams, $state, UserService){

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

  $scope.submitEdit = function(){

    UserService.updateUser({
      user: $stateParams.userId},{
			firstName: $scope.user.firstName,
			lastName: $scope.user.lastName,
			phone: $scope.user.phone,
      email: $scope.user.email
		}).then(function(result){
      alert('Success');
      $state.go('userslist.list');
    }, function(error) {
      console.log(error);
    }).finally(function(){
      //this is only needed if you need to do some clean up
      //work with at the end of the $promise
    });

	};

});
