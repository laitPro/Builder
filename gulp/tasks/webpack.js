'use strict';

const webpack = require('webpack');

module.exports = function($) {
	$.gulp.task('webpack', function(cb) {
    const config = require(`${process.cwd()}/webpack/webpack.config.js`);	
    
    function done(error, stats) {
      if (error) {
        cb('error');
      }
      
      cb();
    };

    webpack(config, done);
	});
};