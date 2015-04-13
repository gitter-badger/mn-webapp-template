define(function(require) {
    'use strict';
    var $ = require('jquery');
    var marionette = require('marionette');

    var App = new marionette.Application();

    App.addRegions({});

    App.addInitializer(function() {
        $('body').append(' World');
    });

    App.on('before:start', function() {
        $('body').append('Hello');
    });

    App.on('start', function() {
        $('body').append('!');
    });

    App.start();
});