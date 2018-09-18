'use strict';

const webpack = require('webpack');
const path = require('path');

const input = path.join(process.cwd(), './app/js/');
const output = path.join(process.cwd(), 'build', '/js');

const config = {

  context: input,

  entry: {
    app: './app.js',
  },

  output: {
    path: output,
    filename: '[name].js'
  }

}

module.exports = config;
