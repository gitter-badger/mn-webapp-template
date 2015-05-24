require(['app'], function(WebApp) {
    'use strict';
    WebApp.module('myModule', function(myModule) {
        this.startWithParent = true;
        this.on('start', function() {
            console.log('myModule started...');
        });
        this.on('stop', function() {
            console.log('myModule stopped...');
            myModule.someFunction();
        });
        this.someFunction = function() {
            console.log('some function called');
        };
    });
});