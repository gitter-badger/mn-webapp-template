define(function(require) {
    'use strict';

    require('modules/marionetteModule');

    var WebApp = require('app');
    var Data = require('models/Data');
    var DataComposite = require('views/DataComposite');
    var data = require('text!../tests/data/DATA.json');

    var dataCollection = new Data.collection(JSON.parse(data));

    var dataCompositeView = new DataComposite({
        collection: dataCollection
    });

    WebApp.on('before:start', function() {
        console.info('WebApp starting...');
    });

    WebApp.on('start', function() {
        $('nav').length === 0 ? $('body').append('<nav></nav>') : null;//needed for running tests
        this.addRegions({
            root: 'body',
            main: '#main',
            nav:  'nav'
        });
        this.main.show(dataCompositeView);
    });

    WebApp.start();
});