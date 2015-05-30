define(function(require) {
    'use strict';

    require('modules/Mn.Override.Templates');

    var Marionette = require('marionette');
    //Backbone.radio shim
    var Radio = require('radio');
    Marionette.Application.prototype._initChannel = function() {
        this.channelName =  _.result(this, 'channelName') || 'global';
        this.channel     =  _.result(this, 'channel') || Radio.channel(this.channelName);
        this.vent        =  _.result(this, 'channel');
    };

    var App = new Marionette.Application();
    App.on('before:start', function() {
        console.info('App is starting...');
    });
    App.on('start', function() {
        console.info('App is started!');
    });
    return App;
});