/**
 * @file Tree Model and Collection
 * @author Jason Wohlgemuth
 */
define(function(require) {
    'use strict';

    var Backbone = require('backbone');

    var TreeModel = Backbone.Model.extend({
        initialize: function() {
            var nodes = this.get("nodes");
            // Covert nodes to a NodeCollection
            this.set("nodes", new TreeCollection(nodes));
        },
        toJSON: function() {
            // Call parent"s toJSON method
            var data = Backbone.Model.prototype.toJSON.call(this);
            if (data.nodes && data.nodes.toJSON) {
                // If nodes is a collection, convert it to JSON
                data.nodes = data.nodes.toJSON();
            }
            return data;
        }

    });
    var TreeCollection = Backbone.Collection.extend({
        model: TreeModel
    });
    return {
        model:      TreeModel,
        collection: TreeCollection
    };

});