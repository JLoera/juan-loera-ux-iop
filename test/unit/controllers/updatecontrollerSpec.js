'use strict';

describe('Update Controller', function(){

  var scope, controller;
  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    controller = $controller('UpdateController', {$scope: scope});
  }));

  it(' should update user', function(){
    expect(scope.user).not.toBe(null);
  });
});
