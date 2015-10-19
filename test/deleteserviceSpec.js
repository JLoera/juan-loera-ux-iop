'use strict';

describe('Delete Controller', function(){

  var scope, controller, $httpBackend, ProfileController, UserService;
  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    controller = $controller('ProfileController', {$scope: scope});
  }));

  beforeEach(inject(function(_$httpBackend_, _UserService_){
    $httpBackend = _$httpBackend_;
    UserService = _UserService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it(' should delete', function(){
    $httpBackend.expectGET('http://localhost:24149/users').respond(200);
    $httpBackend.expectDELETE('http://localhost:24149/users/1').respond(200);

    UserService.deleteUser({user: 1});

    $httpBackend.flush();

    expect(1).toBe(1);
  });
});
