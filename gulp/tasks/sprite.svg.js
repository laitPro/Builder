'use strict'

module.exports = function($) {
  $.gulp.task('sprite.svg', function () {
    const svgminConfig = { js2svg: { pretty: true } };

    const cheerioConfig = {
      run: function ($) {
        $('[fill]').removeAttr('fill');
		    $('[stroke]').removeAttr('stroke');
		    $('[style]').removeAttr('style');
        // $('svg').attr('style', 'display:none');   
      },
      parserOptions: { xmlsMode: true }
    };

    const svgSpriteConfig = {
      mode: {
        symbol: {
          sprite: "sprite.svg.pug",
          dest: '.',
          render: {
            scss: {
              dest: '../../styles/helpers/sprite.svg.scss', //относительный путь относительно template/blocks
              template: "app/tpl/sprite-template.scss" //от корня gulpfile.js
            }
          }
        }
      }
    };
    
    return $.gulp.src($.path.imgs.svg_symbols)
      .pipe($.gp.svgmin(svgminConfig))
      // // remove all fill, style and stroke declarations in out shapes
      .pipe($.gp.cheerio(cheerioConfig))
      // // cheerio plugin create unnecessary string '&gt;', so replace it.
      .pipe($.gp.replaceStr('&gt;', '>'))
      // build svg sprite
      .pipe($.gp.svgSprite(svgSpriteConfig))
      .pipe($.gulp.dest('./app/template/blocks/'));
    });
}