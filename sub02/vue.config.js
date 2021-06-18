module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: process.env.VUE_APP_PORT,
  },
  configureWebpack: {
    output: {
      library: `${process.env.VUE_APP_PACKAGE_NAME}`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${process.env.VUE_APP_PACKAGE_NAME}`,
    },
  },
};
