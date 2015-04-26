module.exports = function(grunt) {
    'use strict';
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        ports: {
            default: 4669,
            karma: 31415,
            livereload: 46692
        },
        config: {
            jshint: './.config/.jshintrc',
            jscs: './.config/.jscsrc',
            csslint: './.config/.csslintrc',
            karma: './.config/karma.conf.js'
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
                jshintrc: '<%= config.jshint %>'
            },
            grunt: 'Gruntfile.js',
            tasks: './tasks/*.js',
            app: './app/**/*.js'
        },
        jscs: {
            options: {
                config: '<%= config.jscs %>',
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
            options: {csslintrc: '<%= config.csslint %>'},
            src: ['./assets/css/**/*.css']
        },
        accessibility: {
            pages: {
                options: {
                    accessibilityLevel: 'WCAG2AAA',
                    ignore : [
                        'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.2'
                    ]
                },
                src: ['./app/*.html']
            },
            templates: {
                options: {
                    accessibilityLevel: 'WCAG2AAA',
                    ignore : [
                        'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.2',
                        'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
                        'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2'
                    ]
                },
                src: ['./assets/templates/**/*.html']
            }
        },
        a11y: {
            test: {
                options: {
                    urls: ['./app/index.html']
                }
            }
        },
        jasmine: {
            main: {
                src: ['app/**/*.js'],
                options: {
                    specs: ['tests/jasmine/specs/**/*.js'],
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
                configFile: '<%= config.karma %>',
                port: '<%= ports.karma %>'
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
                tasks: ['csslint', 'jshint:app', 'jscs', 'accessibility'],
                options: {spawn: false}
            },
            review: {
                files: '<%= meta.files.all %>',
                tasks: ['csslint', 'jshint:app', 'jscs', 'accessibility', 'jasmine:main', 'karma:watch:run'],
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
