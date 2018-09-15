'use strict';

module.exports = function($) {
  $.gulp.task('sprite.png', function(cb) {

    const spriteConfig = {
      imgName: 'sprite.png',
      cssName: 'sprite.png.scss',
      imgPath: '../imgs/decorate/sprite.png' // img path in scss file
    }

    var spriteData = $.gulp.src($.path.imgs.png)
      .pipe($.gp.spritesmith(spriteConfig));
 
    var imgStream = spriteData.img
      .pipe($.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/imgs/decorate/'));

    var cssStream = spriteData.css
      .pipe($.gulp.dest('./app/styles/helpers/'));
 
    $.gp.merge(imgStream, cssStream); 
  
    cb();
  });
};