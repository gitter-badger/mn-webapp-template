module.exports = function(grunt) {
    'use strict';
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });
    grunt.initConfig({
        ports: {
            default: 4660,
            karma: 31415,
            livereload: 46692
        },
        meta: {
            encryptedExtension: '.protected',
            package: grunt.file.readJSON('package.json'),
            files: {
                all: [
                    './app/**/*.html',//HTML
                    './app/**/*.js',//JS
                    './assets/css/**/*.css',//CSS
                    './assets/templates/**/*.html',//Templates
                    './assets/templates/data/*.json',//JSON Template Data
                    './tests/**/*.js',//Tests
                    '!./tests/coverage/**/*'//Exclude coverage files
                ],
                app: [
                    './app/**/*.html',//HTML
                    './app/**/*.js',//JS
                    './assets/css/**/*.css',//CSS
                    './assets/templates/**/*.html',//Templates
                    './assets/templates/data/*.json'//JSON Template Data
                ]
            }
        },
        jshint: {
            options: {
                force: true,
                reporter: require('jshint-table-reporter'),
                jshintrc: '.jshintrc'
            },
            grunt: 'Gruntfile.js',
            tasks: './tasks/*.js',
            app: './app/**/*.js'
        },
        jscs: {
            options: {
                config: '.jscsrc',
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
                port: '<%= ports.karma%>',
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
                        {type: 'text-summary'},
                        {type: 'text-summary',subdir: '.', file: 'text-summary.txt'},
                        {type: 'html', subdir: 'report-html'},
                        {type: 'lcov', subdir: 'report-lcov'},
                        {type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt'},
                        {type: 'cobertura', subdir: '.', file: 'report-cobertura.txt'}//Jenkins compatible
                    ]
                },
                colors: true,
                logLevel: 'INFO',//DISABLE, ERROR, WARN, INFO, DEBUG
                browsers: ['PhantomJS'],//Chrome, ChromeCanary, Firefox, Opera, IE (Win), Safari (Mac)
                captureTimeout: 60000,
                singleRun: true
            },
            watch: {
                background: true,
                singleRun: false,
                coverageReporter: {
                    dir: 'tests/coverage/',
                    includeAllSources: true,
                    reporters: [
                        {type: 'text-summary',subdir: '.', file: 'text-summary.txt'},
                        {type: 'html', subdir: 'report-html'},
                        {type: 'lcov', subdir: 'report-lcov'},
                        {type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt'},
                        {type: 'cobertura', subdir: '.', file: 'report-cobertura.txt'}//Jenkins compatible
                    ]
                }
            },
            coverage: {
                autoWatch: false
            },
            covering: {
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
                files: '<%= meta.files.all %>',
                tasks: ['csslint', 'jshint:src', 'jscs'],
                options: {spawn: false}
            },
            review: {
                files: '<%= meta.files.all %>',
                tasks: ['csslint', 'jshint:src', 'jscs', 'jasmine:main', 'karma:watch:run'],
                options: {
                    livereload: '<%= ports.livereload %>',
                    spawn: false
                }
            },
            browser: {
                files: '<%= meta.files.app %>',
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
    grunt.registerTask('default', ['quick-review']);
    grunt.loadTasks('./tasks');
};
