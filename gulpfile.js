'use strict';

// PROJECT
// ------
global.$ = {
  dev : true,
  package: require('./package.json'),
  config: require('./gulp/config/config'),
  html: require('./gulp/config/favicons/html.json'),
  path: {
    tasks: require('./gulp/path/path.tasks'),
    template: require('./gulp/path/path.template'),
    imgs: require('./gulp/path/path.imgs.js'),
    fonts: require('./gulp/path/path.fonts.js'),
    app: require('./gulp/path/path.app.js')
  },
  gulp: require('gulp'),
  combine: require('stream-combiner2').obj,
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  fs: require('fs'),
  buffer: require('vinyl-buffer'),
  log: require('fancy-log'),
  favicons : require("favicons").stream,
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
$.path.tasks.forEach(taskPath =>  require(taskPath)());

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'img.opt',
    'symbols.svg',
    'sprite.svg',
    'sprite.png',
    'copy.fonts',
    'favicons'
  ),
  $.gulp.parallel(
    'pug',
    'sass',
    'webpack:app'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  ) 
));

$.gulp.task('build', $.gulp.series(
  cb => {
    $.dev = false; 
    $.hash = [...Array(5)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
    cb();
  },
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
    'webpack:app'
  )
));
