describe('Unit testing list directive ', function() {
  var $compile,
      $rootScope,
      $httpBackend;

  // Load the myApp module, which contains the directive
  beforeEach(module('myApp'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));

  it('Replaces the element with the appropriate content', function() {
    //$httpBackend.expectGET('http://localhost:24149/users').respond("");
    $httpBackend.expectGET('edit.html').respond("");
    // Compile a piece of HTML containing the directive
    var element = $compile("<div><user-list></user-list></div>")($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain('<table class="table">');
  });
});
