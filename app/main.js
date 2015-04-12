'use strict';

// RequireJS allows us to configure shortcut alias
require.config({
    //urlArgs is used to cache bust.
    //development should use timestamp, production should use version
    urlArgs: "bust=" + (new Date()).getTime(),
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
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
        jquery: 'path/to/jquery',
        underscore: 'path/to/underscore',
        backbone: 'path/to/backbone',
        handlebars: 'path/to/handlebars'
    }
});

define(function (require) {
    var dependency1 = require('dependency1'),
        dependency2 = require('dependency2');

    return function () {};
});