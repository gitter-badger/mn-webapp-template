var tests = [];
for (var file in window.__karma__.files) {
    if (/.js$/.test(file)) {
        tests.push(file);
    }
}

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
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});