'use strict';

const webpack = require('webpack');
const path = require('path');

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
    filename: '[name].js'
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
  }
}

module.exports = config;
