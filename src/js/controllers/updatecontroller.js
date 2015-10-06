'use strict';

myApp.controller('UpdateController', function($scope, $http, $stateParams, $state, UserService, UpdateService){

  $scope.user = UserService.query();

  $scope.user.$promise.then(function (result) {
    $scope.users = result;
    angular.forEach($scope.users,function(value,index){
      if(value._id == $stateParams.userId){
        $scope.user.firstName = value.firstName;
        $scope.user.lastName = value.lastName;
        $scope.user.email = value.email;
        $scope.user.phone = value.phone;
      };
    });
  });

  $scope.submitEdit = function(){
		UpdateService.update({
      user: $stateParams.userId},{
			firstName: $scope.user.firstName,
			lastName: $scope.user.lastName,
			phone: $scope.user.phone,
      email: $scope.user.email
		},function(data) {
        // success
        alert('Success');
        $state.go('userslist.list');
     }, function(e) {
        // failure
        alert('Error');
     });
	};

});
