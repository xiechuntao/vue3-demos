const { resolve } = require('path')
module.exports = {
  publicPath: "./",
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
