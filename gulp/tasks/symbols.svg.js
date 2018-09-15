'use strict'

module.exports = function($) {
  $.gulp.task('symbols.svg', function () {
    const svgminConfig = { js2svg: { pretty: true } };

    const cheerioConfig = {
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style'); 
        $('svg').attr('style',  'display:none');
      },
      parserOptions: { xmlsMode: true }
    };

    const svgSpriteConfig = {
      svg: { // General options for created SVG files
        xmlDeclaration: false, // Add XML declaration to SVG sprite
      },
      mode: {
        symbol: {
          sprite: "symbols.svg.pug",
          dest: '.',
          render: {
            scss: {
              dest: '../../styles/helpers/symbols.svg.scss', //относительный путь относительно template/blocks
              template: "app/tpl/symbols-template.scss" //от корня gulpfile.js
            }
          }
        }
      }
    };
    
    const output = './app/template/blocks/';

    return $.gulp.src($.path.imgs.svgSymbols)
      .pipe($.gp.svgmin(svgminConfig))
      .pipe($.gp.svgSprite(svgSpriteConfig))
      // // remove all fill, style and stroke declarations in out shapes
      .pipe($.gp.cheerio(cheerioConfig))
      // // cheerio plugin create unnecessary string '&gt;', so replace it.
      .pipe($.gp.replaceStr('&gt;', '>'))
      // build svg sprite
      .pipe($.gulp.dest(output));
    });
}