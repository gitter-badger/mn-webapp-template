define(function(require) {
    'use strict';

    var Marionette = require('marionette');
    var App = new Marionette.Application();

    App.on('before:start', function() {
        console.log('App is starting...');
    });

    App.on('start', function() {
        console.log('App is started!');
    });

    App.vent.on('foo', function() {
        console.log('BOOT!!!');
    });

    return App;
});