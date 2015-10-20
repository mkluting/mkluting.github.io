// cssmin config
module.exports = {
  default: {
    options : {
        keepSpecialComments: 0
    },
    files: [
      // General Styles
      {
        expand: true,
        cwd: 'css',
        src: [ '*.css', '!*.min.css'],
        dest:'css',
        ext: '.min.css'
      }
    ]
  },
};
