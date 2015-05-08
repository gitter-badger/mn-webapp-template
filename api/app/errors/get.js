module.exports = function (io) {
    var errors = {
        foo: 'foo',
        bar: 'bar'
    }
    io.res.end(JSON.stringify(errors));
};