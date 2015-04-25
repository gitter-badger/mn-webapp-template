module.exports = function(grunt) {
    'use strict';
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });
    grunt.initConfig({
        ports: {
            default: 4660,
            livereload: 46692
        },
        meta: {
            encryptedExtension: '.protected',
            package: grunt.file.readJSON('package.json')
        },
        jshint: {
            options: {
                force: true,
                reporter: require('jshint-table-reporter'),
                maxerr        : 50,     // {int} Maximum error before stopping
                bitwise       : true,   // Prohibit bitwise operators (&, |, ^, etc.)
                camelcase     : true,   // Identifiers must be in camelCase
                eqeqeq        : true,   // Require triple equals (===) for comparison
                forin         : true,   // Require filtering for..in loops with obj.hasOwnProperty()
                freeze        : true,   // Prohibit overwriting prototypes of native objects
                indent        : 4,      // {int} Number of spaces to use for indentation
                newcap        : true,   // Require capitalization of all constructor functions
                noarg         : true,   // Prohibit use of `arguments.caller` and `arguments.callee`
                noempty       : true,   // Prohibit use of empty blocks
                nonbsp        : true,   // Prohibit "non-breaking whitespace" characters.
                quotmark      : true,   // Quotation mark consistency: true --> ensure whatever is used is consistent
                unused        : true,   // Require all defined variables be used
                strict        : true,   // Requires all functions run in ES5 Strict Mode
                maxparams     : 10,      // Requires all functions run in ES5 Strict Mode
                maxdepth      : 10,      // {int} Max depth of nested blocks (within functions)
                maxstatements : 50,     // {int} Max number statements per function
                maxcomplexity : 10,      // {int} Max cyclomatic complexity per function
                maxlen        : 130,    // {int} Max number of characters per line
                browser       : true,   // Web Browser (window, document, etc)
                devel         : false,  // Development/debugging (alert, confirm, etc)
                jasmine       : true,
                jquery        : true,
                worker        : false,  // Web Workers
                globals       : {},
                '-W030'         : false // Warning: 'Expected an assignment or function call and instead saw an expression'
            },
            grunt: 'Gruntfile.js',
            tasks: './tasks/*.js',
            src: './app/**/*.js'
        },
        jscs: {
            options: {
                force: true,
                reporter: 'console',//checkstyle, inline, console, text
                reporterOutput: null
            },
            main: {
                files: {
                    src: ['./app/**/*.js']
                }
            }
        },
        jsonlint: {src: ['./*.json', './assets/templates/data/*.json']},
        csslint: {
            options: {csslintrc: '.csslintrc'},
            src: ['./assets/css/**/*.css']
        },
        jasmine: {
            main: {
                src: ['app/**/*.js'],
                options: {
                    specs: ['tests/**/*Spec.js'],
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: 'app/config.js',
                        requireConfig: {
                            baseUrl: 'app'
                        }
                    }
                }
            }
        },
        karma: {
            coverage: {
                options: {
                    // base path, that will be used to resolve files and exclude
                    basePath: '',

                    // frameworks to use
                    frameworks: ['jasmine', 'requirejs'],

                    // list of files / patterns to load in the browser
                    files: [
                        {pattern: 'assets/library/components/**/*.js', included: false},
                        {pattern: 'app/**/*.js', included: false},
                        {pattern: 'tests/**/*Spec.js', included: false},
                        'tests/test-main.js'
                    ],

                    // list of files to exclude
                    exclude: [
                        'app/config.js'
                    ],

                    // test results reporter to use
                    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
                    reporters: ['progress', 'coverage'],

                    // We need 'coverage' both in `reporters` and `preprocessors`
                    // The coverage data will be stored into the "coverage/" folder
                    // both in HTML and JSON format
                    preprocessors: { 'app/**/*.js': ['coverage'] },

                    // enable / disable colors in the output (reporters and logs)
                    colors: true,

                    // level of logging
                    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
                    logLevel: 'INFO',

                    // enable / disable watching file and executing tests whenever any file changes
                    autoWatch: true,

                    // Start these browsers, currently available:
                    // - Chrome
                    // - ChromeCanary
                    // - Firefox
                    // - Opera
                    // - Safari (only Mac)
                    // - PhantomJS
                    // - IE (only Windows)
                    // PhantomJS appears to be used even if not listed here
                    browsers: ['PhantomJS'],

                    // If browser does not capture in given timeout [ms], kill it
                    captureTimeout: 60000,

                    // Continuous Integration mode
                    // if true, it capture browsers, run tests and exit
                    singleRun: true
                }
            }
        },
        express: {
            main: {
                options: {
                    bases: [__dirname],
                    port: '<%= ports.default %>',
                    hostname: '0.0.0.0',
                    livereload: '<%= ports.livereload %>'
                }
            }
        },
        watch: {
            lint: {
                files: [
                    './app/*.html',
                    './app/**/*.js',
                    './assets/css/**/*.css',
                    './assets/templates/**/*.html',
                    './tests/*.html',
                    './tests/jasmine/spec/*.js'
                ],
                tasks: ['csslint', 'jshint:src', 'jscs'],
                options: {spawn: false}
            },
            review: {
                files: [
                    './app/*.html',
                    './app/**/*.js',
                    './assets/css/**/*.css',
                    './assets/templates/**/*.html',
                    './assets/templates/data/*.json',
                    './tests/*.html',
                    './tests/jasmine/spec/*.js'
                ],
                tasks: ['csslint', 'jshint:src', 'jscs', 'jasmine:main'],
                options: {
                    livereload: '<%= ports.livereload %>',
                    spawn: false
                }
            },
            browser: {
                files: [
                    './app/**/*.html',
                    './assets/templates/**/*.html',
                    './assets/templates/data/*.json',
                    './app/**/*.js',
                    './assets/css/**/*.css'
                ],
                tasks: [],
                options: {
                    livereload: '<%= ports.livereload %>',
                    spawn: false
                }
            }
        },
        open: {
            review: {
                path: 'http://localhost:<%= ports.default %>/app',
                app: 'Chrome'
            }
        },
        clean: {
            coverage: ['tests/coverage'],
            plain: ['vault/*', '!vault/*<%= meta.encryptedExtension %>', '!vault/README.md'],
            cipher: ['vault/*<%= meta.encryptedExtension %>']
        },
        crypt:{
            options: {
                key: grunt.cli.options.key || 'password'
            },
            files: [
                {
                    dir: 'vault',
                    include: '**/!(README.md|README.MD)',
                    encryptedExtension: '<%= meta.encryptedExtension %>'
                }
            ]
        }
    });
    grunt.registerTask('default', ['demo']);
    grunt.loadTasks('./tasks');
};
