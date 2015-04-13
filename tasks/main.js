module.exports = function(grunt) {
    'use strict';

    //Review
    grunt.registerTask('review', ['lint', 'express', 'open:review', 'watch:review']);
    grunt.registerTask('lint', ['jsonlint', 'csslint', 'jshint:src', 'jscs']);
    grunt.registerTask('tinker', ['express', 'open:review', 'watch:browser']);

    //Build

    //Test

};