// WARNING: Order matters!
module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: [ 'requirejs', 'jasmine', 'sinon'],// WARNING: Order matters!
        files: [// WARNING: Order matters! (I think)
            {pattern: 'app/**/*.js',                       included: false},//app source
            {pattern: 'assets/templates/**/*.html',        included: false},//templates
            {pattern: 'assets/library/require.text.js',    included: false},//RequireJS Text plugin
            {pattern: 'assets/library/require.json.js',    included: false},//RequireJS JSON plugin
            {pattern: 'assets/library/components/**/*.js', included: false},//Dependencies
            {pattern: 'tests/jasmine/specs/**/*.js',       included: false},//Jasmine Specs
            {pattern: 'tests/data/**/*.js',                included: false},//Data modules
            {pattern: 'node_modules/sinon/pkg/sinon.js',   included: false},//SinonJS (global scope)
            'tests/test-main.js'
        ],
        exclude: ['app/config.js'],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'app/**/*.js': 'coverage',
            './**/*.json': {} //This is REQUIRED to parse JSON files loaded with Require text! plugin...
        },
        coverageReporter: {
            dir: 'tests/coverage/',
            includeAllSources: true,
            reporters: [// WARNING: Order matters! (I think)
                {type: 'text-summary',subdir: '.', file: 'text-summary.txt'},
                {type: 'html', subdir: 'report-html'},
                {type: 'text-summary'},
                {type: 'lcov', subdir: 'report-lcov'},
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