define(function(require) {
    'use strict';

    require('modules/myModule');

    var WebApp = require('app');
    var handlebars = require('handlebars');
    var Data = require('models/Data');
    var DataView = require('views/Data');
    var data = require('text!../tests/data/DATA.json');
    var listTemplate = require('text!../../assets/templates/data.html');
    var compositeTemplate = require('text!../assets/templates/dataComposite.html');

    var DataItemView = Marionette.ItemView.extend({
        tagName: 'li',
        template: handlebars.compile(listTemplate)
    });

    var DataComposite = Marionette.CompositeView.extend({
        tagName: 'ul',
        childView: DataItemView,
        childViewContainer: '.list',
        template: handlebars.compile(compositeTemplate)
    });

    var dataView = new DataView({
        collection: (new Data.collection(JSON.parse(data)))
    });

    var dataCompositeView = new DataComposite({
        collection: (new Data.collection(JSON.parse(data)))
    });

    WebApp.start();
    WebApp.navigation.show(dataView);
    WebApp.navigation.show(dataCompositeView);
});