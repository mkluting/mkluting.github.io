// Sass config
module.exports = {
  default: {
    files: [
        {
            expand : true,
            cwd    : 'css/scss',
            src    : [ '*.scss' ],
            dest   : 'css/',
            ext    : '.css'
        }
    ]
  },
  options: {
    loadPath : 'css/scss',
    style : 'expanded',
    sourcemap: 'none',
    require : 'sass'
  }
};
