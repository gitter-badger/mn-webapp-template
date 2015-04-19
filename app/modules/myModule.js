require(['app'], function (WebApp){
    'use strict';
    var module = WebApp.module('myModule', function(myModule){
        myModule.addInitializer(function(){
            console.log('myModule started...');
            WebApp.vent.trigger('foo');
        });
        myModule.on('stop', function(){
            console.log('myModule stopped...');
        });
    });
});