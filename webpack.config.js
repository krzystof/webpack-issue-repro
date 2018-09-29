const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'bundle.js'),
  devServer: {
    contentBase: __dirname,
    publicPath: '/dist/',
    compress: true,
    port: 9000,
    hotOnly: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}
