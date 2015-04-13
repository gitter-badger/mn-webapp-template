module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('lint', ['jsonlint', 'csslint', 'jshint:src', 'jscs']);
    grunt.registerTask('tinker', ['express', 'open:review', 'watch:browser']);
    grunt.registerTask('review', ['lint', 'express', 'open:review', 'watch:review']);
};