'use strict';

describe('Profile Controller', function(){

  var scope, controller;
  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    controller = $controller('ProfileController', {$scope: scope});
  }));

  it(' user should not be null', function(){
    expect(scope.user).not.toBe(null);
  });
});
