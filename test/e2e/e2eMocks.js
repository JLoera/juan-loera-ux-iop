describe('when navigating to /', function () {

  var ngMockE2E = require('ng-mock-e2e');


  var $httpBackend = ngMockE2E.$httpBackend;


  beforeEach(function () {
    ngMockE2E.addMockModule();
    ngMockE2E.addAsDependencyForModule('myApp');
    ngMockE2E.embedScript('/node_modules/angular-mocks/angular-mocks.js');
  });


  afterEach(function () {
    ngMockE2E.clearMockModules();
  });

  var baseApiUrl = 'http://localhost:24149/';
  var user = {
      firstName: 'test',
      lastName: 'user',
      phone: '956-555-5555',
      email: 'Juan.Loera@banno.com'
  };
  it('should redirect to "#/a" if POST /get-redirection-url responds with "a"', function () {
    $httpBackend.when('GET', baseApiUrl + '/users').respond(user);
    browser.get('http://localhost:1820/');
    console.log(browser.getCurrentUrl());
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'http://localhost:1820/#/list');
  });

});
