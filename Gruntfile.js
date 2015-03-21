module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'js/*.js', 'spec/*.js']
    },

    watch: {
      files: ['js/*.js']
    },

    jasmine: {
      files: ['spec/*.js']
    },

    protractor_webdriver: {
      options: {

      },
      your_target: {
        src:['spec/feature/*_spec.js']
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-protractor-webdriver');

  grunt.registerTask('default', ['jshint']);

};
