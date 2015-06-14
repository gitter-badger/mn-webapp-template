/**
 * @file Tree Model and Collection
 * @author Jason Wohlgemuth
 * @module models/Tree
 * @requires Backbone.js
 * @example
 * var data = require('treeData');
 * var tree = new Tree.collection(data);
 */
define(function(require) {
    'use strict';

    var Backbone = require('backbone');

    /**
     * @name TreeModel
     * @constructor
     * @extends Backbone.Model
     * @prop {object} defaults
     * @prop {string} defaults.parent='nodeName'
     * @prop {string} defaults.children='nodes'
     */
    var TreeModel = Backbone.Model.extend({
        defaults: {
            parent:   'nodeName', //change this value to match the structure of your data/template
            children: 'nodes'     //change this value to match the structure of your data/template
        },
        initialize: function() {
            var model = this;
            var childrenSelector = model.get('children');
            this.set(childrenSelector, new TreeCollection(model.get(childrenSelector)));
        },
        toJSON: function() {
            var data = Backbone.Model.prototype.toJSON.call(this);
            if (data.nodes && data.nodes.toJSON) {
                data.nodes = data.nodes.toJSON();
            }
            return data;
        }
    });
    /**
     * @name TreeCollection
     * @constructor
     * @extends Backbone.Collection
     */
    var TreeCollection = Backbone.Collection.extend({
        model: TreeModel
    });
    return {
        model:      TreeModel,
        collection: TreeCollection
    };

});