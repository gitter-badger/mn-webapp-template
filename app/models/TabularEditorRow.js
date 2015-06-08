define(function(require) {
    'use strict';

    var Backbone = require('backbone');

    var RowModel = Backbone.Model.extend();
    var RowCollection = Backbone.Collection.extend({
        model:      RowModel,
        comparator: 'index'
    });
    return {
        model:      RowModel,
        collection: RowCollection
    };
});