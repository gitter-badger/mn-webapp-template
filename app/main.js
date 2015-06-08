define(function(require) {
    'use strict';

    // import test data
    var data = require('text!../tests/data/DATA.json');
    var rows = require('text!../../../tests/data/rows.json');

    // import dependencies
    var WebApp    = require('app');
    var Data      = require('models/Data');
    var DataView  = require('views/DataComposite');
    var TableRow  = require('models/TabularEditorRow');
    var TableView = require('views/TabularEditor');

    // dataView is a CompositeView that uses data to output a list of company names
    var dataView = new DataView({
        collection: (new Data.collection(JSON.parse(data)))
    });

    // tabularView is a CompositeView that displays data in a tabular interface
    var tabularView = new TableView({
        collection: (new TableRow.collection(JSON.parse(rows)))
    });

    WebApp.on('start', function() {

        // show dataView or tabularView
        // by default the view is rendered in the body element
        this.regions.get('root').show(tabularView);
    });

    WebApp.start();
});