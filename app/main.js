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
        this.addRegions({
            root: 'body'
        });
        this.root.show(dataCompositeView);
    });

    WebApp.start();
});