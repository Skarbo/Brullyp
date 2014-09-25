"use strict";

module.exports = function ( grunt ) {

    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

        compass: {
            watch: {
                options: {
                    config: 'config.rb',
                    watch: true
                }
            },
            development: {
                options: {
                    config: 'config.rb'
                }
            },
            production: {
                options: {
                    config: 'config.rb',
                    environment: 'production',
                    outputStyle: 'compressed',
                    noLineComments: true,
                    cssDir: "public/css_built/"
                }
            },
            clean: {
                options: {
                    clean: true
                }
            }
        },

        watch: {
            sass: {
                files: ['scss/**/*.{scss,sass}'],
                tasks: ['sass:dist']
            },
            livereload: {
                files: ['public/*.html', 'public/css/*.css', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}', 'svg/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'public/css/style.css': 'scss/style.scss'
                },
                options: {
                    sourcemap: 'auto'
                }
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-compass' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    grunt.registerTask( 'compass-production', ['compass:clean', 'compass:development', 'compass:production'] );
    grunt.registerTask( 'compass-watch', ['compass:clean', 'compass:watch'] );
};