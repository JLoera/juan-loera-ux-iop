describe('Unit testing edit directive ', function() {
  var $compile,
      $rootScope,
      $httpBackend;

  // Load the myApp module, which contains the directive
  beforeEach(module('myApp'));
  //beforeEach(module('templates'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('edit.html').respond("");
  }));

  it('Replaces the element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile("<div><user-edit></user-edit></div>")($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    console.log(element.html());
    expect(element.html()).toContain("<h1>Edit User</h1>");
  });
});
