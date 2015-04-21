define(function(require) {
    'use strict';
    var Marionette = require('marionette');
    var handlebars = require('handlebars');
    var WebApp = require('app');
    var tpl = require('text!../../assets/templates/data.html');

    var DataItemView = Marionette.ItemView.extend({
        tagName: 'li',
        template: handlebars.compile(tpl)
    });

    return Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: DataItemView,
        events: {
            'click li': "foo",
            'click a':  "preventDefault"
        },
        foo: function(){
            WebApp.vent.trigger('foo');
        },
        preventDefault: function(e){
            e.preventDefault();
        }
    });
});