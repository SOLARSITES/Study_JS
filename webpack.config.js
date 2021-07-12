const path = require('path');

const mode = process.env.NODE_ENV;

const isDev = mode === 'development';

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  mode,
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    open: true,
    port: 9000,
    hot: true,
    compress: true,
    overlay: true,
    writeToDisk: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './'),
    watchContentBase: true,
  },
  devtool: isDev && 'source-map',
};
