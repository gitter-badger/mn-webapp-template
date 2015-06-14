module.exports = function(grunt) {
    'use strict';

    //Review & Write Code
    grunt.registerTask('css', ['less:dev', 'csslint']);
    grunt.registerTask('lint', [
        'jsonlint',
        'css',
        'jshint:app',
        'jscs'
    ]);
    grunt.registerTask('csslinting',[
        'csslint',
        'watch:csslint'
    ]);
    grunt.registerTask('jshinting',[
        'jshint:app',
        'watch:jshint'
    ]);
    grunt.registerTask('linting', [
        'lint',
        'watch:lint'
    ]);
    grunt.registerTask('review', [
        'lint',
        'karma:coverage',
        'karma:watch:start',
        'express',
        'open:chrome',
        'open:firefox',
        'watch:review'
    ]);
    grunt.registerTask('quick-review', [
        'express',
        'open:chrome',
        'watch:browser'
    ]);

    //Build
        //Concat and minimize CSS files...
        //Optimize JS files...
        //Pre-compile templates...
        //Minimize HTML files...
        //Copy files to 'dist' directory...
    grunt.registerTask('docs', [
        'clean:build',
        'jsdoc:app'
    ]);

    //Test
    grunt.registerTask('test', [
        'lint',
        'jasmine:main',
        'karma:coverage'
    ]);
    grunt.registerTask('test-ci', [
        'lint',
        'jasmine:main',
        'karma:coverage',
        'coveralls'
    ]);
    grunt.registerTask('cover', [
        'clean:build',
        'karma:coverage'
    ]);
    grunt.registerTask('covering', [
        'clean:build',
        'karma:covering'
    ]);
    grunt.registerTask('testing', ['lint', 'karma:covering']);
    grunt.registerTask('aria', ['accessibility', 'a11y']);

    //Deploy
        //Upload to endpoint

    //Utilities
    grunt.registerTask('lock', ['encrypt', 'clean:plain']);
    grunt.registerTask('unlock', ['decrypt', 'clean:cipher']);
};