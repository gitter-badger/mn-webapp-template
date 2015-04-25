module.exports = function(grunt) {
    'use strict';

    //Review & Write Code
    grunt.registerTask('lint', ['jsonlint', 'csslint', 'jshint:app', 'jscs']);
    grunt.registerTask('linting', ['lint', 'watch:lint']);
    grunt.registerTask('review', ['lint', 'karma:coverage', 'karma:watch:start', 'express', 'open:review', 'watch:review']);
    grunt.registerTask('quick-review', ['express', 'open:review', 'watch:browser']);

    //Build
        //Concat and minimize CSS files...
        //Optimize JS files with r.js...
        //Pre-compile templates...
        //Minimize HTML files...
        //Copy files to 'dist' directory...

    //Test
    grunt.registerTask('test', ['lint', 'jasmine:main', 'karma:coverage']);
    grunt.registerTask('testing', ['lint', 'karma:covering']);

    //Deploy
        //Upload to endpoint

    //Utilities
    grunt.registerTask('lock', ['encrypt', 'clean:plain']);
    grunt.registerTask('unlock', ['decrypt', 'clean:cipher']);
};