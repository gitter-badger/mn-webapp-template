define(['app'], function(app) {
    describe('Web App', function() {
        it('should be awesome.', function() {
            expect(true).toBeTruthy();
            app.vent.trigger('foo');
        });
    });
});