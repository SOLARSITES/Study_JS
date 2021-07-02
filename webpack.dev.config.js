const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  devServer: {
    open: true,
    port: 3000,
    hot: true,
    inline: true,
    writeToDisk: true,
    contentBase: path.resolve(__dirname, './'),
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
