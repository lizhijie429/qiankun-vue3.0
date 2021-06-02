const { name } = require("./package");
const port = process.env.VUE_APP_PORT; // 在.env中VUE_APP_PORT=7788，与父应用的配置一致

module.exports = {
  devServer: {
    port,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
