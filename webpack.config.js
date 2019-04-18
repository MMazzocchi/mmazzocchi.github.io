const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  mode: 'production'
};
