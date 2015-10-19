'use strict';

describe('Update Controller', function(){

  var scope, controller, $httpBackend, UpdateController, UserService;
  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    controller = $controller('UpdateController', {$scope: scope});
  }));

  beforeEach(inject(function(_$httpBackend_, _UserService_){
    $httpBackend = _$httpBackend_;
    UserService = _UserService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it(' should update user', function(){
    $httpBackend.expectGET('http://localhost:24149/users').respond(200);
    $httpBackend.expectPUT('http://localhost:24149/users/1').respond(200);

    UserService.updateUser({user: 1}, {firstName: 'Juan', lastName: 'Loera', email: 'juan.loera@banno.com', phone: '956-555-5555'});

    $httpBackend.flush();

    expect(1).toBe(1);
  });
});
