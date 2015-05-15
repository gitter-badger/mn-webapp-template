define(function(require) {
    'use strict';

    require('modules/myModule');
    require('modules/Crypto');

    var WebApp = require('app');
    var Data = require('models/Data');
    var DataComposite = require('views/DataComposite');
    var data = require('text!../tests/data/DATA.json');

    var dataCollection = new Data.collection(JSON.parse(data));

    var dataCompositeView = new DataComposite({
        collection: dataCollection
    });

    WebApp.on('before:start', function(){
        var crypto = WebApp.module('crypto');
        crypto.generateHash('Hello World');
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