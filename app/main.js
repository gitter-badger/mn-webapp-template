/**
 * @file Main entry point for application
 * @author Jason Wohlgemuth
 * @version 1.0.0
 * @copyright Jason Wohlgemuth 2015
 * @license MIT
 */
define(function(require) {
    'use strict';

    // import test data
    //var data = require('text!../../../tests/data/DATA.json');
    //var treeData = require('text!../../../tests/data/tree.json');

    // import dependencies
    var WebApp    = require('app');
    var Data      = require('models/Data');
    var DataView  = require('views/Data');
    var Tree      = require('models/Tree');
    var TreeView  = require('views/Tree');

    // dataView is a CompositeView that uses data to output a list of company names
    //var dataView = new DataView({collection: (new Data.collection(JSON.parse(data)))});

    // treeView is a CollectionView that creates a nested tree structure
    //var treeView = new TreeView({collection: (new Tree.collection(JSON.parse(treeData)))});

    WebApp.on('start', function() {

        // show dataView or tabularView
        // by default the view is rendered in the body element
        //this.regions.get('root').show(treeView);

    });

    WebApp.start();
});
