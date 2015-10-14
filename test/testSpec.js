
describe("List Controller", function(){
  var scope, controller, $httpBackend;

  beforeEach(function(){
    module('myApp');

    inject(function($rootScope, $controller, $injector) {
      scope         = $rootScope.$new();
      controller    = $controller("ListController", { $scope: scope });

      $httpBackend  = $injector.get('$httpBackend');
      $httpBackend.when('query', '/users').respond([
        { id: 1, name: "Entry 1" },
        { id: 2, name: "Entry 2" }
      ]);
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it("initially has no entries", function(){
    expect(scope.users.length).toBe(0);
  });

  it("loads entries with http", function(){
    $httpBackend.expectGET('/users');
    controller.load(function(){
      expect(scope.users.length).toBe(2);
    });
    $httpBackend.flush();
  });

});
