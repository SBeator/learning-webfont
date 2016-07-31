// Gruntfile
module.exports = function (grunt) {
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'build/fonts',
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);
};
