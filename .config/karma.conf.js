module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine', 'requirejs'],
        files: [// WARNING: Order matters! (I think)
            {pattern: 'app/**/*.js', included: false},
            {pattern: 'assets/templates/**/*.html', included: false},
            {pattern: 'assets/library/require.text.js', included: false},
            {pattern: 'assets/library/components/**/*.js', included: false},
            {pattern: 'tests/jasmine/specs/**/*.js', included: false},
            {pattern: 'tests/data/**/*.js', included: false},
            'tests/test-main.js'
        ],
        exclude: ['app/config.js'],
        reporters: ['progress', 'coverage'],
        preprocessors: { 'app/**/*.js': ['coverage'] },
        coverageReporter: {
            dir: 'tests/coverage/',
            includeAllSources: true,
            reporters: [
                {type: 'text-summary'},
                {type: 'text-summary',subdir: '.', file: 'text-summary.txt'},
                {type: 'html', subdir: 'report-html'},
                {type: 'lcov', subdir: 'report-lcov'},
                {type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt'},
                {type: 'cobertura', subdir: '.', file: 'report-cobertura.txt'}//Jenkins compatible
            ]
        },
        colors: true,
        logLevel: 'INFO',        //DISABLE, ERROR, WARN, INFO, DEBUG
        browsers: ['PhantomJS'], //Chrome, ChromeCanary, Firefox, Opera, IE (Win), Safari (Mac)
        captureTimeout: 60000,
        singleRun: true
    });
};