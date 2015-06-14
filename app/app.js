/**
 * @file app.js
 * @author Jason Wohlgemuth
 * @module app
 * @exports app
 */
define(function(require) {
    'use strict';

    require('modules/Mn.Override.Templates');
    require('helpers/handlebars.helpers');
    require('helpers/jquery.extensions');
    require('helpers/underscore.mixins');

    var Marionette = require('marionette');
    var Backbone  = require('backbone');
    //Backbone.radio shim
    var Radio = require('radio');
    Marionette.Application.prototype._initChannel = function() {
        this.channelName =  _.result(this, 'channelName') || 'global';
        this.channel     =  _.result(this, 'channel') || Radio.channel(this.channelName);
        this.vent        =  _.result(this, 'channel');
    };

    /**
     * @class ApplicationModel
     * @extends Backbone.Model
     * @requires Backbone.js
     * @prop {object} default
     * @prop {string} default.name='WebApp'
     */
    var ApplicationModel = Backbone.Model.extend({
        defaults: {
            name: 'WebApp'
        }
    });
    var App = new Marionette.Application({
        model:   new ApplicationModel(),
        regions: new Marionette.RegionManager(),
        onBeforeStart: function() {
            console.info(this.model.get('name') + ' is starting...');
        },
        onStart: function() {
            console.info(this.model.get('name') + ' is started!');
        }
    });
    App.regions.addRegions({
        'root': 'body'
    });
    return App;
});