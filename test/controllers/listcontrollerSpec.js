'use strict';

describe('List Controller', function(){

  var scope, controller;
  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    controller = $controller('ListController', {$scope: scope});
  }));

  it(' user should not be null', function(){
    expect(scope.user).not.toBe(null);
  });
});
