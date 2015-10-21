'use strict';

describe('List Controller', function(){

  var scope, controller, $httpBackend, ListController, UserService;
  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    controller = $controller('ListController', {$scope: scope});
  }));

  beforeEach(inject(function(_$httpBackend_, _UserService_){
    $httpBackend = _$httpBackend_;
    UserService = _UserService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it(' should have one user', function(){
    $httpBackend.expectGET('http://localhost:24149/users').respond(200,[{firstName: 'John', lastName: 'Loera', email: 'juan.loera@banno.com', phone: '956-555-5555'}]);
    $httpBackend.flush();

    expect(scope.users.length).toBe(1);
  });
});
