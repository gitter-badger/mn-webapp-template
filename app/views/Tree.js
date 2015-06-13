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
        tagName: "li",
        // specifies a selector for the element we want the
        // child elements placed into
        childViewContainer: "ul",
        initialize: function() {
            // grab the child collection from the parent model
            // so that we can render the collection as children
            // of this parent node
            this.collection = this.model.get("nodes");
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
        tagName: "ul",
        childView: TreeCompositeView
    });
});