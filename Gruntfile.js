// Load external config files
function loadConfig(path) {
  var glob = require('glob'),
      object = {},
      key;
 
  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/,'');
    object[key] = require(path + option);
  });

  return object;
}

module.exports = function(grunt) {
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    // Get Paths
  };

  // Combine all configs
  grunt.util._.extend(config, loadConfig('./grunt-tasks/options/'));

  // Load config
  grunt.initConfig(config);

  // Load Tasks standard task
  require('load-grunt-tasks')(grunt);

  // Load custom tasks
  grunt.loadTasks('grunt-tasks');

  // Register aliases
  //grunt.registerTask('default', ['requirejs', 'uglify', 'sass', 'bless', 'cssmin']);
  grunt.registerTask('default', ['sass']);
};
