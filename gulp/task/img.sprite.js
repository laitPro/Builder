'use strict';

module.exports = function($) {
  $.gulp.task('img.sprite', function(cb) {

    var spriteData = $.gulp.src($.path.img.decorate_sprite).pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      imgPath: '../imgs/decorate/sprite/sprite.png'
    }));
 
    var imgStream = spriteData.img
      .pipe($.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/imgs/decorate/sprite/png/'));

    var cssStream = spriteData.css
      .pipe($.gulp.dest('./app/style/helpers/'));
 
    $.gp.merge(imgStream, cssStream); 
  
    cb();
  });
};