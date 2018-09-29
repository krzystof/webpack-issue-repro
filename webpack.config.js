const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'bundle.js'),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hotOnly: true
  }
}
