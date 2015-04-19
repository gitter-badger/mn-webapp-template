require(['app'], function (WebApp){
    'use strict';
    WebApp.module('myModule', function(myModule){
        myModule.startWithParent = true;
        myModule.addInitializer(function(){
            console.log('myModule started...');
        });
        myModule.on('stop', function(){
            console.log('myModule stopped...');
        });
    });
});