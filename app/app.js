define(function(require) {
    'use strict';

    require('modules/TemplateOverride');

    var Marionette = require('marionette');
    var App = new Marionette.Application();

    App.on('before:start', function() {
        console.log('App is starting...');
    });

    App.on('start', function() {
        console.log('App is started!');
    });

    return App;
});