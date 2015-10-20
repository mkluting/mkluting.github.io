// Uglify config
module.exports = {
  default: {
    files: [
    /*
      { // Main 
        dest: 'main.min.js', // Contains the require.min.js lib and the require configuration
        src: [
          'modernizr.custom.min.js',
          'require-min.js',
          'require-config.js'
        ]
      }, */
      { // App Modules
        expand: true,
        ext: '.min.js',
        src: [
          '<%= clftrStatic %>js/modules/*.js',
          '!<%= clftrStatic %>js/modules/*.min.js'
        ],
      },
    ]
  },
  options: {
    preserveComments: false,
    sourceMap: false,
    report: 'min'
  }
};
