define(function(require) {
    'use strict';
    var Backbone = require('backbone');

    var ErrorModel = Backbone.Model.extend({
        defaults: {
            timestamp: null,
            type: null,
            data: null,
            code: null,
            index: null,
            _id: null
        }
    });

    var ErrorCollection = Backbone.Collection.extend({
        model: ErrorModel
    });

    return {
        model: ErrorModel,
        collection: ErrorCollection
    };
});