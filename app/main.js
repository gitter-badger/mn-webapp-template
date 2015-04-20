define(function(require) {
    'use strict';
    require('modules/myModule');

    var WebApp = require('app');
    var handlebars = require('handlebars');
    var Error = require('models/Error');
    var ErrorView = require('views/Error');
    var data = require('text!../tests/data/ERRORS.json');
    var listTemplate = require('text!../../assets/templates/error.html');
    var compositeTemplate = require('text!../assets/templates/errorComposite.html');

    var ErrorItemView = Marionette.ItemView.extend({
        tagName: 'li',
        template: handlebars.compile(listTemplate)
    });

    var ErrorComposite = Marionette.CompositeView.extend({
        tagName: 'ul',
        childView: ErrorItemView,
        childViewContainer: '.list',
        template: handlebars.compile(compositeTemplate)
    });

    var errorsView = new ErrorView({
        collection: (new Error.collection(JSON.parse(data)))
    });

    var errorCompositeView = new ErrorComposite({
        collection: (new Error.collection(JSON.parse(data)))
    });

    WebApp.start();
    WebApp.navigation.show(errorsView);
});