define(function(require) {
    'use strict';

    var Marionette = require('marionette');
    var tpl = require('text!../../assets/templates/data.html');

    var DataItemView = Marionette.ItemView.extend({
        tagName: 'li',
        template: tpl
    });

    return Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: DataItemView,
        events: {
            'click li': 'foo',
            'click a':  'preventDefault'
        },
        preventDefault: function(e) {
            e.preventDefault();
        }
    });
});