require.config({
    baseUrl: '',
    //urlArgs is used to cache bust.
    //development should use timestamp, production should use version
    urlArgs: 'bust=' + (new Date()).getTime(),
    skipDataMain: true,
    shim: {
        underscore: {
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
        //Paths are relative to this file and do not need extensions
        jquery: '../assets/library/bower_components/jquery/dist/jquery.min',
        underscore: '../assets/library/bower_components/underscore/underscore',
        backbone: '../assets/library/bower_components/backbone/backbone',
        marionette: '../assets/library/bower_components/marionette/lib/backbone.marionette.min',
        handlebars: '../assets/library/bower_components/handlebars/handlebars.min',
        text: '../assets/library/require.text'
    }
});