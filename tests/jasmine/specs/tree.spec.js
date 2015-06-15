define(function(require) {
    'use strict';

    require('sinon');

    var app   = require('app');
    var model = require('models/Tree');
    var view  = require('views/Tree');
    var data  = require('treeData');

    describe('When using the template Tree View', function() {
        it('should be awesome.', function() {
            expect(true).toBeTruthy();
        });
        it('should load and render without problems', function() {
            var TreeView = new view({
                collection: (new model.collection(data))
            });
            expect(TreeView.collection.size()).toBeGreaterThan(0);
        })
    });
});