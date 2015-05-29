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
    grunt.registerTask('linting', ['lint', 'watch:lint']);
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
    grunt.registerTask('css', ['less:prod', 'csslint']);
        //Concat and minimize CSS files...
        //Optimize JS files with r.js...
        //Pre-compile templates...
        //Minimize HTML files...
        //Copy files to 'dist' directory...

    //Test
    grunt.registerTask('test', ['lint', 'aria', 'jasmine:main', 'karma:coverage']);
    grunt.registerTask('testing', ['lint', 'karma:covering']);
    grunt.registerTask('aria', ['accessibility', 'a11y']);

    //Deploy
        //Upload to endpoint

    //Utilities
    grunt.registerTask('lock', ['encrypt', 'clean:plain']);
    grunt.registerTask('unlock', ['decrypt', 'clean:cipher']);
};