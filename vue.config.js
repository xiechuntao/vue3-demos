const { resolve } = require('path')
module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: "./",
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
