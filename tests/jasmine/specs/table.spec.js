define(function(require) {
    'use strict';

    require('sinon');

    var app   = require('app');
    var model = require('models/TableRow');
    var view  = require('views/Table');
    var data  = require('tableData');

    describe('When using the template Table View', function() {
        it('should be awesome.', function() {
            expect(true).toBeTruthy();
        });
        it('should load and render without problems', function() {
            var TableView = new view({
                collection: (new model.collection(data))
            });
            expect(TableView.collection.size()).toBeGreaterThan(0);
        })
    });
});