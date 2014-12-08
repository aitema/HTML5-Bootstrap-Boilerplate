/*!
 * @ Package for Responsive Boilerplate Micro Lib @!!!!!
 */
module.exports = function(grunt) {
    "use strict";

    // Time to execute each task, you can see at the end, after Grunt command on terminal
    require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Copyright, Version number and date.
        banner: '/*!' +
            '* <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
            '* Author: <%= pkg.author %> - Licensed under MIT license.\n' +
            '*/\n',
        express: {
            all: {
                options: {
                    bases: ['.'],
                    port: 3001,
                    hostname: "0.0.0.0" //,
                        //ivereload: false
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:3001/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-express');
    // Register task to see the Demo page using localhost:3001
    grunt.registerTask('dev', ['express', 'open', 'express-keepalive']);
};