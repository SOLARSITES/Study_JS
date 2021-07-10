const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV;

const isDev = mode === 'development';

// const generateFilename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    filename: 'index.js',
    // filename: `./js/${generateFilename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // environment: {
    //   arrowFunction: false,
    // },
  },
  mode,
  context: path.resolve(__dirname, 'src'),
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'index.html'),
    //   minify: {
    //     collapseWhitespace: !isDev,
    //   },
    // }),
    // new MiniCssExtractPlugin({
    //   filename: `./css/${generateFilename('css')}`,
    // }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: '../images',
    //       to: 'images',
    //     },
    //   ],
    // }),
  ],
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
      // {
      //   test: /\.(c|sa|sc)ss$/i,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: '../',
      //       },
      //     },
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // },
      // {
      //   test: /\.(png|jpg|jpeg|svg|gif|ico|)$/i,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name].[ext]',
      //     },
      //   },
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|svg)$/i,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name].[ext]',
      //     },
      //   },
      // },
      // {
      //   test: /\.html$/i,
      //   use: ['html-loader'],
      // },
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
    // contentBase: path.resolve(__dirname, './dist'),
    watchContentBase: true,
  },
  // devtool: isDev && 'source-map',
};
