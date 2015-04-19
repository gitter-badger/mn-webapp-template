define(function(require) {
    'use strict';
    require('modules/myModule');

    var WebApp = require('app');
    var Error = require('models/Error');
    var ErrorView = require('views/Error');
    var data = require('text!../tests/data/ERRORS.json');

    var errorsView = new ErrorView({
        collection: (new Error.collection(JSON.parse(data)))
    });

    WebApp.start();
    WebApp.navigation.show(errorsView);
});