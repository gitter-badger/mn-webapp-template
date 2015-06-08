define(function(require) {
    'use strict';

    var Backbone = require('backbone');
    var _        = require('underscore');

    var RowModel = Backbone.Model.extend({
        validate: function(attr, options) {
            //Validate generic data types here
        }
    });
    var RowCollection = Backbone.Collection.extend({
        model:      RowModel,
        comparator: 'index'
    });
    return {
        model:      RowModel,
        collection: RowCollection
    }
});