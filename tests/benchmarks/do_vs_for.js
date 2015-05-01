var forLoop = function(n) {
    var i = 0, k = 0;
    for (; ; ) {
        k += i; i++;
        if (i>=n) break;
    }
};

var doLoop = function(n) {
    var i = 0, k = 0;
    do { k += i; i++ } while (i<n);
};

// A test suite
module.exports = {
    name: 'For vs. Do',
    tests: {
        'ForLoop': function() {
            forLoop(10000);
            forLoop(100);
        },
        'DoLoop': function() {
            doLoop(1000);
            doLoop(100);
        }
    }
};