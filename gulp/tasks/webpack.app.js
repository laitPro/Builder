'use strict';

const webpack = require('webpack');

module.exports = function() {
	$.gulp.task('webpack:app', function(cb) {

    const config = require(`${process.cwd()}/webpack/webpack.config.js`);

    const statsLog = {
      colors: true,
      reasons: true,
      chunks: false
    };

    webpack(config, done);

    function done(err, stats) {
      if (err) {
        error(err.stack || err);
        if (err.details) {
          error(err.details);
        }
        cb();
      }
      
      const info = stats.toJson(statsLog);

      if (stats.hasErrors()) {
        error(info.errors);
      }

      // if (stats.hasWarnings()) {
      //   $.log.warn(info.warnings);
      // }

      $.log(stats.toString(statsLog));
      cb();
    }

    function error(error) {
      $.log.error(error);
      $.gp.notify({
        message: 'Error webpack'
      });
      cb();
    }
	});
};