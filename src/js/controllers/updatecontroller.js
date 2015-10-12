'use strict';

myApp.controller('UpdateController', function($scope, $http, $stateParams, $state, toaster, UserService){

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

  $scope.submitEdit = function(){

    UserService.updateUser({
      user: $stateParams.userId},
      $scope.user
    ).then(function(result){
      toaster.pop('success', 'Updated!', 'User properties updated');
      $state.go('list');
    }, function(error) {
      console.log(error);
    });

	};

});
