'use strict';

module.exports = function($) {
  $.gulp.task('img.sprite.png', function(cb) {

    var spriteData = $.gulp.src($.path.imgs.png_sprites).pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.png.scss',
      // img path in scss file
      // that means the way from css to img file in build folder
      imgPath: '../imgs/decorate/sprite/sprite.png'
    }));
 
    var imgStream = spriteData.img
      .pipe($.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/imgs/decorate/sprite/'));

    var cssStream = spriteData.css
      .pipe($.gulp.dest('./app/styles/helpers/'));
 
    $.gp.merge(imgStream, cssStream); 
  
    cb();
  });
};