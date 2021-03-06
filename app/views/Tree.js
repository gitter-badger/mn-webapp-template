/**
 * @file Tree View
 * @author Jason Wohlgemuth
 * @module views/Tree
 * @extends Marionette.CollectionView
 * @requires Marionette
 * @example
 * var data     = require('treeData');
 * var Tree     = require('models/Tree');
 * var TreeView = require('views/Tree');
 * var treeView = new TreeView({collection: (new Tree.collection(data)});
 * someRegion.show(treeView);
 */
define(function(require) {
    'use strict';

    var Marionette   = require('marionette');
    var treeTemplate = require('text!../../assets/templates/tree.html');

    /**
     * @name TreeCompositeView
     * @constructor
     * @extends Marionette.CompositeView
     * @prop {string} tagName='li'
     * @prop {string} childViewContainer='ul'
     */
    var TreeCompositeView = Marionette.CompositeView.extend({
        template: treeTemplate,
        tagName: 'li',
        childViewContainer: 'ul',
        initialize: function() {
            var view =  this;
            var model = view.model;
            view.collection = model.get(model.get('children'));
        },
        onRender: function() {
            var view =  this;
            var model = view.model;
            if (view.collection.size() === 0) {
                view.$el.addClass('leaf');
            } else {
                view.$el.addClass('branch');
            }
            view.$el.attr('data-node', model.get(model.get('parent')));
        }
    });
    return Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: TreeCompositeView,
        className: 'tree'
    });
});