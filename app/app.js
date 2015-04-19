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

    App.addInitializer(function() {
        console.log('Initializer added.');
    });

    App.on('start', function() {
        console.log('App is started.');
    });

    return App;
});