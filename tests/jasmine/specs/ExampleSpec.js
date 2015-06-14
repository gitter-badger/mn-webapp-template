define(['app'], function(app) {
    describe('Web App', function() {
        it('should be awesome.', function() {
            expect(true).toBeTruthy();
        });
        it('should be able to parse JSON objects', function() {
            var text = '{"foo": "bar"}';
            var data = JSON.parse(text);
            expect(data.foo).toMatch('bar');
        });
    });
});