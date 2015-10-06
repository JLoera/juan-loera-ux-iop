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
	.state('userprofile.list', {
		url: '/list',
		templateUrl: 'partials/userprofile.list.html',
		controller: 'ProfileController'
	})

	.state('userslist', {
		url: '/userslist',
		templateUrl: 'partials/userslist.html'
	})
	.state('userslist.list', {
		url: '/list',
		templateUrl: 'partials/userslist.list.html',
		controller: 'ListController'
	})

	.state('edituser', {
		url: '/edituser',
		templateUrl: 'partials/edituser.html'
	})
	.state('edituser.list', {
		url: '/list/:userId',
		templateUrl: 'partials/edituser.list.html',
		controller: 'UpdateController'
	})

	.state('newuser', {
		url: '/newuser',
		templateUrl: 'partials/newuser.html'
	})
	.state('newuser.list', {
		url: '/list',
		templateUrl: 'partials/newuser.list.html',
		controller: 'CreateController'
	});
});
