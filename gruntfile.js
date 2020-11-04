'use strict';

const { option } = require('grunt');
const { css } = require('jquery');

module.exports = function(grunt) {
    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                'css/styles.css':'css/styles.scss'
            }
        },
        watch:{
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync:{
            dev:{
                bsfiles:{
                    src:[
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options:{
                    watchTask:true,
                    server:{
                        baseDir:'./'
                    }
                }
            }
        }

    });

    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync','watch']);
}