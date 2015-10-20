module.exports = {
  home: {
    options: {
      name: "modules/home",
      baseUrl: "js",
      // Paths are relative to the baseUrl
      paths: {
        jquery : 'lib/jquery.min',
      },
      out: "js/modules/home.min.js"
    }
  },
  options: {
    generateSourceMaps: false,
    preserveLicenseComments: false,
    optimize: 'uglify2'
  }
};
