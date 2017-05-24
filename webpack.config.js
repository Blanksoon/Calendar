var path = require('path')
var webpack = require('webpack')
module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/dist/',
  },
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    path.resolve('src/index.js'),
  ],
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, 
    ],
  }   
}