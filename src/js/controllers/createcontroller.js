'use strict';

myApp.controller('CreateController', function($scope, $http, $state, UserService){

  $scope.submit = function(){

    UserService.addUser({
			firstName: $scope.user.firstName,
			lastName: $scope.user.lastName,
			phone: $scope.user.phone,
      email: $scope.user.email
		}).then(function(result){
      $state.go('userslist.list');
    }, function(error) {
      console.log(error);
    }).finally(function(){
      //this is only needed if you need to do some clean up
      //work with at the end of the $promise
    });
    
	};

});
