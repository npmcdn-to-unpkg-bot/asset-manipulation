module.exports = function(grunt) {

    grunt.initConfig({
        pkg         : grunt.file.readJSON('package.json'),
        watch       : {
            files: ['Gruntfile.js', 'src/main/javascript/**/*.js', 'src/main/javascript/**/*.html'],
            tasks: ['bower_concat', 'less', 'uglify']
        },
        copy     : {
            main: {
                files: [
                    {
                        expand: true,
                        cwd   : '',
                        src   : ['jspm_packages/**'],
                        dest  : 'src/main/resources/javascript/lib'
                    },
                    {
                        expand: true,
                        src   : ['config.js'],
                        dest  : 'src/main/resources/javascript/lib'
                    }
                  ]
            }
        },
        bower_concat: {
            all: {
                dest        : 'src/main/resources/javascript/lib/_jam.js',
                cssDest     : 'src/main/resources/css/lib/_jam.css',
                bowerOptions: {
                    relative: false
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                compress: false,
                beautify:true
            },
            my_target: {
                files: {
                    'src/main/resources/javascript/lib/_jam.min.js': ['src/main/resources/javascript/lib/_jam.js']
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true  //minifying the result
                },
                files: {
                    "./src/main/resources/css/bootstrap.min.css":"./src/main/less/bootstrap.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['bower_concat', 'copy', 'less', 'uglify']);

};
