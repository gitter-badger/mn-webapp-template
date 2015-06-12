/**
 * @file Main entry point for app
 * @author Jason Wohlgemuth
 * @version 1.0.0
 * @copyright Jason Wohlgemuth 2015
 * @license MIT
 */
define(function(require) {
    'use strict';

    // import test data
    var data = require('text!../../../tests/data/DATA.json');

    // import dependencies
    var WebApp    = require('app');
    var Data      = require('models/Data');
    var DataView  = require('views/Data');
/*
    // dataView is a CompositeView that uses data to output a list of company names
    var dataView = new DataView({
        collection: (new Data.collection(JSON.parse(data)))
    });
*/
    WebApp.on('start', function() {

        // show dataView or tabularView
        // by default the view is rendered in the body element
        //this.regions.get('root').show(tabularView);

    });

    WebApp.start();
});