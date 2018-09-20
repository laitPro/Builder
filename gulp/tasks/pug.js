'use strict';

module.exports = function($) {
  var patterns = [];

  $.gulp.task('pug', function() {

    patterns.push({match: '%=suffix=%', replace: dev ? '' : '.min'});
    patterns.push({ match: '%=version=%', replace: dev ? '' : `.${pack.version}`});

    return $.combine(
      $.gulp.src($.path.template, {since: $.gulp.lastRun('pug')}),
      $.gp.pug({
        locals : JSON.parse($.fs.readFileSync('./content.json', 'utf8')),
        pretty: true
      }),
      $.gp.replace({ patterns: patterns, usePrefix: false }),
      $.gulp.dest($.config.root)
    )
    .on('error', $.gp.notify.onError(error => ({
      title: 'Pug',
      message: error.message
    })));
  });
};
