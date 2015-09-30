'use strict';

var myApp = angular.module('myApp', ['ui.router','ngResource']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/userprofile');
  //
  // Now set up the states
  $stateProvider
	.state('userprofile', {
		url: '/userprofile',
		templateUrl: 'partials/userprofile.html'
	})
	.state('userprofile.prop', {
		url: '/prop',
		templateUrl: 'partials/userprofile.prop.html',
		controller: function($scope) {
			$scope.profileInfo = {firstName: 'Juan', lastName: 'Loera', email: 'Juan.Loera@banno.com', phone: '(956)555-5555'};
		}
	})

	.state('userslist', {
		url: '/userslist',
		templateUrl: 'partials/userslist.html'
	})
	.state('userslist.list', {
		url: '/list',
		templateUrl: 'partials/userslist.list.html',
		controller: function($scope) {
			$scope.users = [
				{firstName: 'Juan', lastName: 'Loera', email: 'Juan.Loera@banno.com', phone: '(956)555-5555'},
				{firstName: 'Chad', lastName: 'Killingsworth', email: 'Chad.Killingsworth@banno.com', phone: '(956)555-5555'},
				{firstName: 'Kean', lastName: 'Drake', email: 'Kean.Drake@banno.com', phone: '(956)555-5555'}
			];
		}
	})

	.state('edituser', {
		url: '/edituser',
		templateUrl: 'partials/edituser.html'
	})
	.state('edituser.prop', {
		url: '/prop',
		templateUrl: 'partials/edituser.prop.html',
		controller: function($scope) {
			$scope.profileInfo = {firstName: 'Kean', lastName: 'Drake', email: 'Kean.Drake@banno.com', phone: '(956)555-5555'};
		}
	})

	.state('newuser', {
		url: '/newuser',
		templateUrl: 'partials/newuser.html'
	})
	.state('newuser.prop', {
		url: '/prop',
		templateUrl: 'partials/newuser.prop.html',
		controller: function($scope) {
			$scope.profileInfo = {firstName: '', lastName: '', email: '', phone: ''};
		}
	});
});
