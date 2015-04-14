module.exports = function(grunt) {
    'use strict';
    var ports = {
        default: 4669,
        livereload: 46692,
        karma: 31415
    };
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        defaultPort: ports.default,
        livereloadPort: ports.livereload,
        karmaPort: ports.karma,
        pkg: grunt.file.readJSON('package.json'),
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
        jsonlint: {src: ['./*.json']},
        csslint: {src: ['./assets/css/**/*.css']},
        jasmine: {
            src: ['./app/**/*.js'],
            options: {
                specs: './test/jasmine/spec/*.js',
                helpers: './test/jasmine/helper/*.js',
                vendor: ['./assets/library/bower_components/jquery/dist/jquery.min.js', './assets/library/require.min.js']
            }
        },
        karma: {
            options: {
                frameworks: ['jasmine'],
                files: [
                    './test/jasmine/spec/*.js',
                    './test/jasmine/helper/*.js',
                    './assets/library/bower_components/jquery/dist/jquery.min.js',
                    './assets/library/require.min.js',
                    './app/**/*.js'
                ],
                exclude: ['./app/config.js'],
                preprocessors: {
                    'source/*.js': 'coverage'
                },
                coverageReporter: {
                    reporters: [
                        {type: 'teamcity', dir: 'test/coverage', file: 'teamcity-coverage.txt'},
                        {type: 'cobertura', dir: 'test/coverage'},
                        {type: 'lcov', dir: 'test/coverage'},
                        {type: 'text-summary', dir: 'test/coverage'}
                    ]
                },
                browsers: ['PhantomJS'],
                port: '<%= karmaPort %>',
                autoWatch: false,
                singleRun: false
            },
            CI: {
                reporters: ['coverage'],
                singleRun: true
            },
            coverage: {
                reporters: ['progress', 'coverage'],
                autoWatch: true
            }
        },
        express: {
            main: {
                options: {
                    bases: [__dirname],
                    port: '<%= defaultPort %>',
                    hostname: '0.0.0.0',
                    livereload: '<%= livereloadPort %>'
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
                    './test/*.html',
                    './test/jasmine/spec/*.js',
                    './test/jasmine/helper/*.js'
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
                    './test/*.html',
                    './test/jasmine/spec/*.js',
                    './test/jasmine/helper/*.js'
                ],
                tasks: ['csslint', 'jshint:src', 'jscs', 'jasmine'],
                options: {
                    livereload: '<%= livereloadPort %>',
                    spawn: false
                }
            },
            browser: {
                files: [
                    './app/*.html',
                    './app/**/*.js',
                    './assets/css/**/*.css'
                ],
                tasks: [],
                options: {
                    livereload: '<%= livereloadPort %>',
                    spawn: false
                }
            }
        },
        open: {
            review: {
                path: 'http://localhost:<%= defaultPort %>/app',
                app: 'Chrome'
            }
        }
    });
    grunt.registerTask('default', ['demo']);
    grunt.loadTasks('./tasks');
};
