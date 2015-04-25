module.exports = function(grunt) {
    'use strict';

    //Review
    grunt.registerTask('lint', ['jsonlint', 'csslint', 'jshint:src', 'jscs']);
    grunt.registerTask('linting', ['lint', 'watch:lint']);
    grunt.registerTask('review', ['lint', 'karma:coverage', 'karma:watch:start', 'express', 'open:review', 'watch:review']);
    grunt.registerTask('quick-review', ['express', 'open:review', 'watch:browser']);

    //Build

    //Test
    grunt.registerTask('test', ['lint', 'jasmine:main', 'karma:coverage']);
    grunt.registerTask('testing', ['lint', 'karma:covering']);

    //Deploy

    //Utilities
    grunt.registerTask('lock', ['encrypt', 'clean:plain']);
    grunt.registerTask('unlock', ['decrypt', 'clean:cipher']);
};