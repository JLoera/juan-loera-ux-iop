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
		template: '<user-list></user-list>',
		controller: 'ListController'
	})

  .state('userslist.profile', {
		url: '/profile/:userId',
		template: '<user-profile></user-profile>',
		controller: 'ProfileController'
	})

	.state('userslist.edit', {
		url: '/edit/:userId',
		template: '<user-edit></user-edit>',
		controller: 'UpdateController'
	})

	.state('userslist.new', {
		url: '/new',
		template: '<user-new></user-new>',
		controller: 'CreateController'
	});
});
