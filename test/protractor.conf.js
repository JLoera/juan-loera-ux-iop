// conf.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/e2eSpec.js','e2e/e2eMocks.js']
}
