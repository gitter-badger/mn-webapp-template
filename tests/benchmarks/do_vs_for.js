var forLoop = function(n) {
    var i;
    var arr = [];
    for (i=0;i<n;i++) {
        arr.push(i);
    }
};

var doLoop = function(n) {
    var i;
    var arr = [];
    do {
        arr.push(i);
        i++;
    }
    while (i < n);
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