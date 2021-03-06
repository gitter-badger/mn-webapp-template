/**
 * @file Main entry point for application
 * @author Jason Wohlgemuth
 * @version 1.0.0
 * @license MIT
 */
define(function(require) {
    'use strict';

    var WebApp   = require('app');

    WebApp.on('start', function() {
        console.info('Please read the source and/or generated documentation for more information.');
    });
    WebApp.start();
});
