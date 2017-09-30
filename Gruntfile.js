module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

     // Start local web server
    'http-server': {
      dev: {
        root: 'html',
        port: 8800,
        host: 'localhost',
        runInBackground: false
      }
    },


    // Compile scss using compass
    compass: {
      dist: {
        options: {
          sassDir: 'scss',
          cssDir: 'html/css',
          sourcemap: true
        }
      }
    },

    // Minify css
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        sourceMap: false
      },
      build: {
        files: [{
          expand: true,
          cwd: 'html/css',
          src: ['*.css', '!*.min.css'],
          dest: 'html/css',
          ext: '.min.css'
        }]
      }
    },

    // Listen for changes
    watch: {
      css: {
        files: 'scss/**/*.scss',
        tasks: ['compass']
      }
    }

  });

  // Register task(s)
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s)
  grunt.registerTask('start', ['http-server:dev']);
  grunt.registerTask('minify', ['cssmin']);
  grunt.registerTask('default', ['watch']);
};
