describe('Protractor test for onboarding ', function() {
  it('should have a title', function() {
    browser.get('http://localhost:1820/');

    expect(browser.getTitle()).toEqual('Juan Loera ux-iop');
  });
});
