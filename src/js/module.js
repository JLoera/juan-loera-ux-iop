'use strict';

var myApp = angular.module('myApp', ['ui.router','ngResource']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/userslist');
  //
  // Now set up the states
  $stateProvider
	.state('userslist', {
		url: '/userslist',
		templateUrl: 'partials/userslist.html'
	})
	.state('userslist.list', {
		url: '/list',
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	})

  .state('userslist.profile', {
		url: '/profile/:userId',
		templateUrl: 'partials/profile.html',
		controller: 'ProfileController'
	})

	.state('userslist.edit', {
		url: '/edit/:userId',
		templateUrl: 'partials/edit.html',
		controller: 'UpdateController'
	})

	.state('userslist.new', {
		url: '/new',
		templateUrl: 'partials/new.html',
		controller: 'CreateController'
	});
});
