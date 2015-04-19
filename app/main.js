require(['app',
        'marionette',
        'models/Error',
        'views/Error',
        'text!../tests/data/ERRORS.json',
        'modules/myModule'],
    function (WebApp, Mn, Error, ErrorView, data){
        'use strict';
        var errorsView = new ErrorView({
            collection: (new Error.collection(JSON.parse(data)))
        });

        WebApp.start();
        WebApp.navigation.show(errorsView);
});