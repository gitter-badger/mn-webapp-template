'use strict';
define(function (require) {
    var $ = require('jquery'),
        marionette = require('marionette');

    $('document').ready(function(){
        $('body').append(' World');
    });
});