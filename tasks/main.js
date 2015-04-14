module.exports = function(grunt) {
    'use strict';

    //Review
    grunt.registerTask('lint', ['jsonlint', 'csslint', 'jshint:src', 'jscs']);
    grunt.registerTask('linting', ['lint', 'watch:lint']);
    grunt.registerTask('review', ['lint', 'express', 'open:review', 'watch:review']);
    grunt.registerTask('quick-review', ['express', 'open:review', 'watch:browser']);

    //Build

    //Test
    grunt.registerTask('test', ['lint', 'jasmine', 'karma:CI']);
};