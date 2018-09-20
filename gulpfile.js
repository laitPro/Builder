'use strict';

global.dev = false;
global.pack = require('./package.json');

var $ = {
  dev : true,
  modern: true,
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    tasks: require('./gulp/path/path.tasks'),
    template: require('./gulp/path/path.template'),
    imgs: require('./gulp/path/path.imgs.js'),
    fonts: require('./gulp/path/path.fonts.js'),
    foundation: require('./gulp/path/path.foundation.js'),
    app: require('./gulp/path/path.app.js')
  },
  gulp: require('gulp'),
  combine: require('stream-combiner2').obj,
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  fs: require('fs'),
  buffer: require('vinyl-buffer'),
  log: require('fancy-log'),
  gp: require('gulp-load-plugins')({
    rename: {
      'gulp-sass-glob': 'sassGlob',
      'gulp.spritesmith' : 'spritesmith',
      'gulp-replace-task' : 'replace',
      'gulp-svg-sprite' : 'svgSprite',
      'gulp-replace': 'replaceStr'
    }
  }),
};

// TASKS
// ------
$.path.tasks.forEach(taskPath =>  require(taskPath)($));

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'img.opt',
    'symbols.svg',
    'sprite.svg',
    'sprite.png',
    'copy.fonts'
  ),
  $.gulp.parallel(
    'pug',
    'sass',
    'js.foundation',
    'js.process',
    'webpack:app'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  ) 
));
