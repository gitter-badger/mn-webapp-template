/**
 * @file Main entry point for application
 * @author Jason Wohlgemuth
 * @version 1.0.0
 * @copyright Jason Wohlgemuth 2015
 * @license MIT
 */
define(function(require) {
    'use strict';

    var WebApp   = require('app');
    var Tree     = require('models/Tree');
    var TreeView = require('views/Tree');
    var data     = require('treeData');

    var treeView = new TreeView({collection: (new Tree.collection(data))});

    WebApp.on('start', function() {
        this.regions.get('root').show(treeView);
    });

    WebApp.start();
});
