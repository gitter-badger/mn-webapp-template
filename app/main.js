define(function(require) {
    'use strict';

    require('modules/myModule');

    var WebApp = require('app');
    var Data = require('models/Data');
    var DataView = require('views/Data');
    var data = require('text!../tests/data/DATA.json');
    var listTemplate = require('text!../../assets/templates/data.html');
    var compositeTemplate = require('text!../assets/templates/dataComposite.html');

    var DataItemView = Marionette.ItemView.extend({
        tagName: 'li',
        template: listTemplate
    });

    var DataComposite = Marionette.CompositeView.extend({
        tagName: 'ul',
        childView: DataItemView,
        childViewContainer: '.list',
        template: compositeTemplate
    });

    var dataView = new DataView({
        collection: (new Data.collection(JSON.parse(data)))
    });

    var dataCompositeView = new DataComposite({
        collection: (new Data.collection(JSON.parse(data)))
    });

    WebApp.on('start', function() {
        $('nav').length === 0 ? $('body').append('<nav></nav>') : null;//needed for running tests
        this.addRegions({
            root: 'body',
            main: '#main',
            navigation: 'nav'
        });
        this.navigation.show(dataView);
        this.navigation.show(dataCompositeView);
    });

    WebApp.start();
});