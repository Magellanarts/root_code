module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //compass
    compass: {
      dist: {
        options: {
          sassDir: 'dev/sass',
          cssDir: 'target',
          specify: 'dev/sass/style.scss',
          imagesDir: 'dev/i/'
        }
      }
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'dev',
            src: ['*.html', '*.php', 'js/**/*', 'videos/**/*', 'page-templates/*.php', 'components/*.php', 'i/**/*', 'fonts/**/*', 'data/**/*'],
            dest: 'target/'
          }
        ]
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'ie 10']
      },

      dist: {
        src: 'target/style.css'
      }

    },

    clean: {
      dist: ['target/']

    },

    watch: {
      files: ['dev/**'],
      tasks: ['default'],
      options: {
        livereload: true
      }
    }

  });

  //Load in plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['clean', 'copy', 'compass', 'autoprefixer']);
}