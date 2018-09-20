'use strict';

const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const input = path.join(process.cwd(), './app/js/');
const output = path.join(process.cwd(), 'build', '/js');

const config = {

  context: input,

  mode : dev ? 'development' : 'production',

  entry: {
    app: './app.js',
  },

  output: {
    path: output,
    filename: dev ? '[name].js' : `[name].${pack.version}.min.js`,
  },

  watch: dev,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: dev ? 'inline-source-map' : undefined,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  optimization: !dev ? {
    minimizer: [new UglifyJsPlugin({
      // cache: true,
      parallel: true,
      uglifyOptions: {
        compress: {
          inline: false,
          warnings: false,
          drop_console: true,
          unsafe: true
        },
        ecma: 6,
      },
      sourceMap: true
    })]
  } : {}

}

module.exports = config;
