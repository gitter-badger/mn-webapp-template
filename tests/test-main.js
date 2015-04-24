var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

requirejs.config({
    baseUrl: '/base/app',
    shim: {
        'underscore': {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        jquery: '../assets/library/components/jquery/dist/jquery.min',
        underscore: '../assets/library/components/underscore/underscore',
        backbone: '../assets/library/components/backbone/backbone',
        marionette: '../assets/library/components/marionette/lib/backbone.marionette.min',
        handlebars: '../assets/library/components/handlebars/handlebars.min',
        text: '../assets/library/require.text'
    },
    // ask Require.js to load these files (all our tests)
    deps: allTestFiles,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});