'use strict';

describe('Create Controller', function(){

  var scope, controller;
  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    controller = $controller('CreateController', {$scope: scope});
  }));

  it(' submit should not be null', function(){
    expect(scope.submit).not.toBe(null);
  });
});
