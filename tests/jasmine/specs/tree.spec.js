define(['app', 'models/Tree', 'views/Tree', 'treeData'], function(app, model, view, data) {
    describe('When using the template Tree View', function() {
        it('should be awesome.', function() {
            expect(true).toBeTruthy();
        });
        it('should load and render without problem', function() {
            var TreeView = new view({
                collection: (new model.collection(data))
            });
        })
    });
});