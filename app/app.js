define(function(require) {
    'use strict';

    require('modules/Mn.Override.Templates');

    var Marionette = require('marionette');
    var Backbone  = require('backbone');
    //Backbone.radio shim
    var Radio = require('radio');
    Marionette.Application.prototype._initChannel = function() {
        this.channelName =  _.result(this, 'channelName') || 'global';
        this.channel     =  _.result(this, 'channel') || Radio.channel(this.channelName);
        this.vent        =  _.result(this, 'channel');
    };

    var ApplicationModel = Backbone.Model.extend({
        defaults: {
            name: 'My Web App'
        }
    });
    var App = new Marionette.Application();
    App.regions = new Marionette.RegionManager({
        regions: {
            'root': 'body'
        }
    });
    App.model = new ApplicationModel();
    App.on('before:start', function() {
        console.info(App.model.get('name') + ' is starting...');
    });
    App.on('start', function() {
        console.info(App.model.get('name') + ' is started!');
    });
    return App;
});