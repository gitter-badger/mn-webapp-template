define(function(require) {
    'use strict';

    var Marionette = require('marionette');
    var listTemplate = require('text!../../assets/templates/data.html');
    var compositeTemplate = require('text!../../assets/templates/dataComposite.html');

    var DataItemView = Marionette.ItemView.extend({
        tagName: 'li',
        template: listTemplate
    });

    return Marionette.CompositeView.extend({
        tagName: 'ul',
        childView: DataItemView,
        childViewContainer: '.list',
        template: compositeTemplate,
        events: {
            'click a': 'preventDefault'
        },
        preventDefault: function(e) {
            e.preventDefault();
        }
    });
});