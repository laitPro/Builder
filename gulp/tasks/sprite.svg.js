'use strict';

module.exports = function($) {
  $.gulp.task('sprite.svg', function () {
    return $.gulp.src($.path.imgs.svg)
      .pipe($.gp.svgSprite({
        shape: {
          spacing: {
            padding: 5
          }
        },
        mode: {
          css: {
            dest: "./",  /*кладем в корень папки '$.config.root' */
            layout: "diagonal",
            sprite: "imgs/sprite.svg",
            bust: false,
            render: {
              scss: {
                dest: '../app/styles/helpers/sprite.svg.scss', //относительный путь
                template: "app/tpl/sprite-svg-template.scss" //от корня gulpfile.js
              }
            }
          }
        },
        variables: {
          mapname: "icons"
        }
      }))
      .pipe($.gulp.dest($.config.root));
  })
}