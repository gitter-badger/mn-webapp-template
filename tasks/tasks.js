module.exports = function(grunt) {
    'use strict';
    var develop = 'Starts continuous server for use when writing code with real-time linting and testing.' +
        'Use --page to designate which file to use while writing.';
    var build = 'Prepare production files (lint, concat, minify, inject)';
    var test = 'Run Jasmine tests, calculate code coverage, and report results.';
    var deploy = 'Clean. Build. Test. Evaluate. Generate documentation.';
    var demo = 'Open live-reload enabled demo.  Use --page to designate which file to demo.';
    var dump = 'Copy Kawa to new directory with no connection to git.  Set destination directory with --dest.';
    var tinker = 'Perform immediate live-reload as you edit code.';

    grunt.registerTask('develop', develop,
        ['lint', 'jasmine', 'wiredep:test', 'injector:test', 'express:all', 'open:test', 'watch:write']);
    grunt.registerTask('build', build,
        ['csslint', 'jsonlint:all', 'jshint:all', 'concat', 'uglify']);
    grunt.registerTask('test', test,
        ['jasmine', 'karma:CI']);
    grunt.registerTask('tdd', 'Run tests continuously via watch task',
        ['watch:test']);
    grunt.registerTask('tinker', tinker,
        ['jsonlint', 'wiredep:test', 'injector:test', 'express:all', 'open:test', 'watch:browser']);
    grunt.registerTask('deploy', deploy,
        ['clean', 'build', 'test']);
    grunt.registerTask('demo', demo,
        ['deploy', 'copy:demo', 'wiredep:demo', 'injector:demo', 'open:demo', 'express:demo']);
    grunt.registerTask('refactor', ['csslint', 'jsonlint', 'jshint:all', 'jscs:main', 'watch:lint']);
    grunt.registerTask('lint',
        ['csslint', 'jsonlint', 'jshint:all', 'jscs:main']);
    grunt.registerTask('lock', ['encrypt', 'clean:plain']);
    grunt.registerTask('unlock', ['decrypt', 'clean:cipher']);
};