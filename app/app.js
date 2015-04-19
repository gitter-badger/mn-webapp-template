define(function(require) {
    'use strict';
    var Marionette = require('marionette');
    var App = new Marionette.Application();

    App.addRegions({
        root: 'body',
        main: '#main',
        navigation: 'nav'
    });

    App.on('before:start', function() {
        console.log('App is starting...');
    });

    App.on('start', function() {
        console.log('App is started.');
        this.controllers = {};

    });

    App.vent.on('foo', function(){
        console.log('boot!!!');
    });

    return App;
});