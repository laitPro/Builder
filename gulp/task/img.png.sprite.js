'use strict';

module.exports = function($) {
  $.gulp.task('img.png.sprite', function(cb) {

    var spriteData = $.gulp.src($.path.imgs.png_sprites).pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.png.scss',
<<<<<<< HEAD:gulp/task/img.png.sprite.js
      imgPath: '../imgs/decorate/sprite.png' //img path in scss file
=======
      imgPath: '../imgs/decorate/sprite/sprite.png' //img path in scss file
>>>>>>> dev:gulp/task/img.sprite.png.js
    }));
 
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