module.exports = function(grunt) {
    'use strict';
    var env = {
        name: 'ModuleX',
        root: './',
        encryptedFileExt: '.protected',
        defaultPort: 4669,
        livereloadPort: 46692,
        karmaPort: 31415,
        vagrantIP: '4.6.6.9'
    };
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        name: env.name,
        root: env.root,
        defaultPort: env.defaultPort,
        livereloadPort: env.livereloadPort,
        karmaPort: env.karmaPort,
        encryptExt: env.encryptedFileExt,
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['<%= root %>source/*.js'],
                dest: 'dist/<%= name %>.js'
            }
        },
        uglify: {
            options: {
                mangle: true,
                preserveComments: false
            },
            dist: {
                files: {
                    'dist/<%= name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
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
            all: {
                src: ['Gruntfile.js', 'tasks/*.js', '<%= root %>source/*.js']
            },
            grunt: 'Gruntfile.js',
            tasks: 'tasks/*.js',
            src: '<%= root %>source/*.js'
        },
        jscs: {
            options: {
                force: true,
                reporter: 'console',//checkstyle, inline, console, text
                reporterOutput: null
            },
            main: {
                options: {
                    config: 'assets/config/.jscsrc'
                },
                files: {
                    src: ['<%= root %>source/*.js']
                }
            },
            comments: {
                options: {
                    plugins: [
                        'jscs-jsdoc'
                    ],
                    jsDoc: {
                        checkAnnotations: 'jsdoc3',
                        checkParamNames: true,
                        checkReturnTypes: true,
                        checkRedundantParams: true,
                        checkRedundantReturns: true,
                        checkTypes: true,
                        enforceExistence: true,
                        requireParamTypes: true,
                        requireReturnTypes: true
                    }
                },
                files: {
                    src: ['<%= root %>source/*.js']
                }
            }
        },
        jsonlint: {
            all: {
                src: ['*.json']
            },
            npm: 'package.json',
            bower: 'bower.json'
        },
        csslint: {
            assets: {
                options: {
                    csslintrc: 'assets/config/.csslintrc'
                },
                src: ['assets/**/*.css']
            }
        },
        uncss: {
            options: {
                //stylesheets: ['assets/css/*.css']
            },
            main: {
                files: [
                    {
                        src: ['test/*.html'],
                        dest: 'dist/main.css'
                    }
                ]
            }
        },
        jasmine: {
            main: {
                src: ['<%= root %>source/*.js'],
                options: {
                    specs: 'test/Jasmine/spec/*.js',
                    helpers: 'test/Jasmine/helper/*.js',
                    vendor: 'bower_components/jquery/dist/jquery.min.js'
                }
            }
        },
        karma: {
            options: {
                frameworks: ['jasmine'],
                files: [
                    'test/Jasmine/spec/*.js',
                    'test/Jasmine/helper/*.js',
                    'bower_components/jquery/dist/jquery.min.js',
                    '<%= root %>source/*.js'
                ],
                exclude: [],
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
            cover: {
                reporters: ['progress', 'coverage'],
                autoWatch: true
            }
        },
        express: {
            all: {
                options: {
                    bases: [__dirname],
                    port: '<%= defaultPort %>',
                    hostname: '0.0.0.0',
                    livereload: '<%= livereloadPort %>'
                }
            },
            demo: {
                options: {
                    bases: [__dirname],
                    port: '<%= defaultPort %>',
                    hostname: '0.0.0.0',
                    serverreload: true
                }
            }
        },
        watch: {
            write: {
                files: [
                    '<%= root %>source/*.js',
                    'test/*.html',
                    'test/Jasmine/spec/*.js',
                    'test/Jasmine/helper/*.js',
                    'assets/css/*.css'
                ],
                tasks: ['csslint', 'jshint', 'jscs:main', 'jasmine'],
                options: {
                    livereload: '<%= livereloadPort %>',
                    spawn: false
                }
            },
            browser: {
                files: [
                    '<%= root %>source/*.js',
                    'test/*.html',
                    'assets/css/*.css'
                ],
                tasks: [],
                options: {
                    livereload: '<%= livereloadPort %>',
                    spawn: false
                }
            },
            lint: {
                files: [
                    '<%= root %>source/*.js',
                    'Gruntfile.js', '*.json',
                    'assets/lib/*.js',
                    'assets/css/*.css'
                ],
                tasks: ['lint'],
                options: {
                    spawn: false
                }
            },
            test: {
                files: [
                    '<%= root %>source/*.js',
                    'test/*.html',
                    'test/Jasmine/spec/*.js',
                    'test/Jasmine/helper/*.js'
                ],
                tasks: ['jasmine:main'],
                options: {
                    spawn: false
                }
            }
        },
        wiredep: {
            directory: './bower_components',
            test: {
                src: ['test/*.html']
            },
            demo: {
                src: ['dist/demo/*.html']
            }
        },
        injector: {
            options: {
                relative: true,
                addRootSlash: false,
                starttag: '<!-- inject:{{ext}} -->',
                endtag: '<!-- inject:end -->'
            },
            test: {
                files: {
                    'test/index.html': [
                        '<%= root %>source/*.js',
                        'assets/lib/*.js',
                        'assets/css/*.css'
                    ],
                    'test/example.html': [
                        '<%= root %>source/*.js',
                        'assets/lib/*.js',
                        'assets/css/*.css'
                    ]
                }
            },
            demo: {
                files: {
                    'dist/demo/index.html': [
                        '<%= root %>dist/*.min.js',
                        'assets/lib/*.js',
                        'assets/css/*.css'
                    ],
                    'dist/demo/example.html': [
                        '<%= root %>dist/*.min.js',
                        'assets/lib/*.js',
                        'assets/css/*.css'
                    ]
                }
            }
        },
        copy: {
            kawa: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= root %>',
                        src: [
                            '.gitignore',//Ignore Git repo files
                            '.bowerrc',//Bower configuration
                            '.travis.yml',//Travis-CI configuration
                            '.js*',//various JS config files (JSHint, JSCS, etc...)
                            'Vagrantfile',//Vagrant configuration
                            'Gruntfile.js',//Grunt configuration
                            'bower.json',//Bower dependencies
                            'package.json',//node dependencies
                            'assets/config/.*',//configuration files
                            'assets/**/!(example.css)',
                            'source/**/!(example.js)',
                            'tasks/**',
                            'test/**',
                            'vault/**'],
                        dest: grunt.cli.options.dest || '../workspace'
                    }
                ]
            },
            import: {
                files: [
                    {
                        expand: true,
                        cwd: grunt.cli.options.src || '<%= root %>',
                        src: [
                            'source/*.js',
                            'assets/config/.*',
                            'assets/css/*.css',
                            'assets/lib/**',
                            'assets/img/*',
                            'assets/font/*.{svg,eot,ttf,woff}',
                            'test/*.html',
                            'test/Jasmine/spec/*.js',
                            'test/Jasmine/helper/*.js'
                        ],
                        dest: grunt.cli.options.dest || './'
                    }
                ]
            },
            demo: {
                files: [
                    {
                        expand: true,
                        cwd: 'test',
                        src: '*.html',
                        dest: 'dist/demo/'
                    }
                ]
            }
        },
        open: {
            test: {
                path: grunt.cli.options.page ?
                    'http://localhost:<%= defaultPort %>/test/<%= grunt.cli.options.page %>.html' :
                    'http://localhost:<%= defaultPort %>/test',
                app: 'Chrome'
            },
            demo: {
                path: grunt.cli.options.page ?
                    'http://localhost:<%= defaultPort %>/dist/demo/<%= grunt.cli.options.page %>.html' :
                    'http://localhost:<%= defaultPort %>/dist/demo',
                app: 'Chrome'
            },
            docs: {
                path: __dirname + '/docs/index.html'
            }
        },
        clean: {
            docs: ['docs'],
            dist: ['dist'],
            coverage: ['test/coverage'],
            plain: ['vault/*', '!vault/*<%= encryptExt %>', '!vault/README.md'],
            cipher: ['vault/*<%= encryptExt %>']
        },
        coveralls: {
            options: {
                force: true
            },
            main: {
                src: 'test/coverage/Phantom*/lcov.info'
            }
        },
        crypt:{
            options: {
                key: grunt.cli.options.key || 'password'
            },
            files: [
                {
                    dir: 'vault',
                    include: '**/!(README.md|README.MD)',
                    encryptedExtension: '<%= encryptExt %>'
                }
            ]
        }
    });
    grunt.registerTask('default', ['demo']);
    grunt.loadTasks('./tasks');
};
