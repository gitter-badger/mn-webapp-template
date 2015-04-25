define(function(require) {
    'use strict';

    var $ = require('jquery');
    var Marionette = require('marionette');
    var App = new Marionette.Application();



    App.addRegions({
        root: 'body',
        main: '#main',
        navigation: 'nav'
    });

    App.on('before:start', function() {
        $('nav').length === 0 ? $('body').append('<nav></nav>') : null;//needed for running tests
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