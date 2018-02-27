'use strict'

module.exports = function($) {
<<<<<<< HEAD:gulp/task/img.svg.symbols.js
  $.gulp.task('img.svg.symbols', function () {
    return $.gulp.src($.path.imgs.content_svg)
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.svgSprite2({
        mode: "symbols",
        preview: false
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('svg').attr('style', 'display:none');   
=======
  $.gulp.task('img.sprite.svg', function () {
    return $.gulp.src($.path.imgs.svg_sprites)
      .pipe($.gp.svgSprite1({
        shape: {
          spacing: {
            padding: 5
          }
>>>>>>> dev:gulp/task/img.sprite.svg.js
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
                template: "app/tpl/sprite-template.scss" //от корня gulpfile.js
              }
            }
          }
        },
        variables: {
          mapname: "icons"
        }
      }))
<<<<<<< HEAD:gulp/task/img.svg.symbols.js
      .pipe($.gp.replaceStr('&gt;', '>'))
      .pipe($.gp.rename('svg.symbols.pug'))
      .pipe($.gulp.dest('./app/template/blocks/'));
=======
      .pipe($.gulp.dest($.config.root));
>>>>>>> dev:gulp/task/img.sprite.svg.js
    });
}