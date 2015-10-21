// Karma configuration
// Generated on Mon Oct 12 2015 13:29:35 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angularjs-toaster/toaster.js',
      '../node_modules/angular-resource/angular-resource.js',
      '../node_modules/angular-ui-router/build/angular-ui-router.js',
      '../node_modules/angular-mocks/angular-mocks.js',

      '../src/js/module.js',
      '../src/js/routes.js',
      '../src/js/controllers/*.js',
      '../src/js/directives/*.js',
      '../src/js/services/*.js',
      '../temp/templates.js',

      '../test/unit/services/listserviceSpec.js',
      '../test/unit/services/createserviceSpec.js',
      '../test/unit/services/updateserviceSpec.js',
      '../test/unit/services/deleteserviceSpec.js',

      '../test/unit/directives/editdirectiveSpec.js',
      '../test/unit/directives/profiledirectiveSpec.js',
      '../test/unit/directives/newdirectiveSpec.js',
      '../test/unit/directives/listdirectiveSpec.js',

      '../test/unit/controllers/updatecontrollerSpec.js',
      '../test/unit/controllers/profilecontrollerSpec.js',
      '../test/unit/controllers/createcontrollerSpec.js',
      '../test/unit/controllers/listcontrollerSpec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
