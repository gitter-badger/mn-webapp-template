define(['app'], function(app) {
    describe('When using this web app template', function() {
        it('should be awesome.', function() {
            expect(true).toBeTruthy();
        });
        it('should be able to parse JSON objects', function() {
            var data = JSON.parse('{"foo": "bar"}');
            expect(data.foo).toMatch('bar');
        });
    });
});