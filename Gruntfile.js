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
            options: {
                basePath: '',
                frameworks: ['jasmine', 'requirejs'],
                files: [
                    {pattern: 'assets/library/components/**/*.js', included: false},
                    {pattern: 'app/**/*.js', included: false},
                    {pattern: 'tests/**/*Spec.js', included: false},
                    'tests/test-main.js'
                ],
                exclude: ['app/config.js'],
                reporters: ['progress', 'coverage'],
                preprocessors: { 'app/**/*.js': ['coverage'] },
                coverageReporter: {
                    dir: 'tests/coverage/',
                    includeAllSources: true,
                    reporters: [
                        {type: 'html', subdir: 'report-html'},
                        {type: 'lcov', subdir: 'report-lcov'},
                        {type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt'},
                        {type: 'text-summary', subdir: '.', file: 'text-summary.txt'},
                        {type: 'cobertura', subdir: '.', file: 'report-cobertura.txt'}//Jenkins compatible
                    ]
                },
                colors: true,
                logLevel: 'INFO',//DISABLE, ERROR, WARN, INFO, DEBUG
                browsers: ['PhantomJS'],//Chrome, ChromeCanary, Firefox, Opera, IE (Win), Safari (Mac)
                captureTimeout: 60000
            },
            coverage: {
                autoWatch: false,
                singleRun: true
            },
            ci: {
                autoWatch: true,
                singleRun: false
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
