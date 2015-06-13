/**
 * @file Tree View
 * @author Jason Wohlgemuth
 */
define(function(require) {
    'use strict';

    var Marionette = require('marionette');
    var template   = require('text!../../assets/templates/tree.html');

    var TreeCompositeView = Marionette.CompositeView.extend({
        template: template,
        tagName: 'li',
        className: 'tree-leaf',
        childViewContainer: 'ul',
        initialize: function() {
            this.collection = this.model.get('nodes');
            if (this.collection.size() === 0){
                this.$el.addClass('no-children');
            } else {
                this.$el.addClass('parent');
            }
            this.$el.attr('data-node', this.model.get('nodeName'));
        },
        ui: {
            'item': 'li'
        },
        events: {
            'click @ui.item': 'onClick'
        },
        onClick: function(e) {
            e.stopImmediatePropagation();
        }
    });
    return Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: TreeCompositeView,
        className: 'tree-branch'
    });
});