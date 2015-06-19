module.exports = function(grunt) {
    'use strict';
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        ports: {
            default:    4669,
            karma:      31415,
            livereload: 46692
        },
        config: {
            jshint:  './.config/.jshintrc',
            jscs:    './.config/.jscsrc',
            jsdoc:   './.config/.jscsrc-jsdoc',
            csslint: './.config/.csslintrc',
            karma:   './.config/karma.conf.js'
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
            app:   './app/**/*.js'
        },
        jscs: {
            options: {
                force: true,
                reporter: 'console',//checkstyle, inline, console, text
                reporterOutput: null
            },
            app: {
                files: {
                    src: ['./app/**/*.js']
                },
                options: {
                    config: '<%= config.jscs %>'
                }
            },
            comments: {
                files: {
                    src: ['./app/**/*.js']
                },
                options: {
                    config: '<%= config.jsdoc %>'
                }
            }
        },
        jsonlint: {src: ['./*.json', './assets/templates/data/*.json']},
        csslint: {
            options: {csslintrc: '<%= config.csslint %>'},
            src: ['./assets/css/**/*.css']
        },
        less: {
            dev: {
                options: {
                    paths: ['assets/less'],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
                    ]
                },
                files: {
                    'assets/css/styles.css': 'assets/less/styles.less'
                }
            },
            prod: {
                options: {
                    paths: ['assets/less'],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                        new (require('less-plugin-clean-css'))({advanced: true})
                    ]
                },
                files: {
                    'assets/css/styles.css': 'assets/less/styles.less'
                }
            }
        },
        accessibility: {
            pages: {
                options: {
                    reportLevels: {
                        notice: false,
                        warning: true,
                        error: true
                    },
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
                    keepRunner: false,
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
                    includeAllSources: true
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
        coveralls: {
            options: {
                // LCOV coverage file relevant to every target
                coverageDir: 'tests/coverage/',
                recursive: true,
                force: true
            }
        },
        plato: {
            app : {
                src : 'app/**/*.js',
                dest : 'reports',
                options : {
                    jshint : grunt.file.readJSON('.config/.jshintrc')
                }
            }
        },
        express: {
            main: {
                options: {
                    bases: [__dirname],
                    port:       '<%= ports.default %>',
                    hostname:   '0.0.0.0',
                    livereload: '<%= ports.livereload %>'
                }
            }
        },
        watch: {
            less: {
                files: 'assets/less/**/*.less',
                tasks: ['less', 'csslint'],
                options: {spawn: false}
            },
            csslint: {
                files: './assets/css/**/*.css',
                tasks: ['less', 'csslint'],
                options: {spawn: false}
            },
            jshint: {
                files: './app/**/*.js',
                tasks: ['jshint:app'],
                options: {spawn: false}
            },
            jscs: {
                files: './app/**/*.js',
                tasks: ['jscs:app', 'jscs:comments'],
                options: {spawn: false}
            },
            lint: {
                files: '<%= meta.files.all %>',
                tasks: ['less', 'csslint', 'jshint:app', 'jscs'],
                options: {spawn: false}
            },
            review: {
                files: '<%= meta.files.all %>',
                tasks: ['csslint', 'jshint:app', 'jscs', 'jasmine:main', 'karma:watch:run'],
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
            chrome: {
                path: 'http://localhost:<%= ports.default %>/app',
                app: 'Chrome'
            },
            firefox: {
                path: 'http://localhost:<%= ports.default %>/app',
                app: 'Firefox'
            }
        },
        clean: {
            build: ['docs/*', 'tests/coverage'],
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
        },
        jsdoc : {
            app: {
                src: ['app/**/*.js'],
                dest: 'docs'
            }
        }
    });
    grunt.registerTask('default', ['quick-review']);
    grunt.loadTasks('./tasks');
};
