// Watch config
module.exports = {
  default: {
    files: [ 
        'css/scss/**/*.scss'
    ],
    tasks: [ 'sass', 'bless', 'cssmin' ]
  },
};
