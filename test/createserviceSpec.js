'use strict';

describe('Create Controller', function(){

  var scope, controller, $httpBackend, CreateController, UserService;
  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    controller = $controller('CreateController', {$scope: scope});
  }));

  beforeEach(inject(function(_$httpBackend_, _UserService_){
    $httpBackend = _$httpBackend_;
    UserService = _UserService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it(' should post', function(){
    $httpBackend.expectPOST('http://localhost:24149/users').respond(200);

    UserService.addUser({firstName: 'John', lastName: 'Loera', email: 'juan.loera@banno.com', phone: '956-555-5555'});

    $httpBackend.flush();

    expect(1).toBe(1);
  });
});
