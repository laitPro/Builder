'use strict'

module.exports = function($) {
  $.gulp.task('img.sprite.svg', function () {
    return $.gulp.src($.path.img.svg)
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlsMode: true}
      }))
      .pipe($.gp.replaceStr('&gt;', '>'))
      .pipe($.gp.svgSprite2({
        mode: "symbols",
        preview: false
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('svg').attr('style', 'display:none');   
        },
        parserOptions: {xmlsMode: true}
      }))
      .pipe($.gp.replaceStr('&gt;', '>'))
      .pipe($.gp.rename('svg.pug'))
      .pipe($.gulp.dest('app/template/blocks'));
    });
}