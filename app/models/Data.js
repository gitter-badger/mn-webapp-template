define(function(require) {
    'use strict';
    var Backbone = require('backbone');

    var DataModel = Backbone.Model.extend({
        defaults: {
            _id: null,
            guid: null,
            eyeColor: null,
            name: null,
            email: null,
            tagline: null,
            about: null,
            address: null,
            latitude: null,
            isActive: null
        }
    });

    var DataCollection = Backbone.Collection.extend({
        model: DataModel
    });

    return {
        model: DataModel,
        collection: DataCollection
    };
});