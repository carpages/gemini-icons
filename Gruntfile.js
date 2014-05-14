module.exports = function(grunt) {

  var options = {
    engine: 'node',
    syntax: 'bootstrap',
    stylesheet: 'scss',
    font: 'icons',
    styles: '',
    templateOptions: {
      classPrefix: 'icon--'
    }
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      normal: {
        src: 'icons/normal/*.svg',
        dest: 'fonts/normal',
        options: options
      },
      social: {
        src: 'icons/social/*.svg',
        dest: 'fonts/social',
        options: options
      },
      ios: {
        src: 'icons/ios/*.svg',
        dest: 'fonts/ios',
        options: options
      },
      android: {
        src: 'icons/android/*.svg',
        dest: 'fonts/android',
        options: options
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);

};
