'use strict';

var myApp = angular.module('myApp', ['ui.router','ngResource', 'toaster']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('list');
  //
  // Now set up the states
  $stateProvider
	.state('list', {
		url: '/list',
		template: '<user-list></user-list>',
		controller: 'ListController'
	})

  .state('profile', {
		url: '/profile/:userId',
		template: '<user-profile></user-profile>',
		controller: 'ProfileController'
	})

	.state('edit', {
		url: '/edit/:userId',
		template: '<user-edit></user-edit>',
		controller: 'UpdateController'
	})

	.state('new', {
		url: '/new',
		template: '<user-new></user-new>',
		controller: 'CreateController'
	});
});
