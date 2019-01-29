'use strict';

module.exports = function() {
  $.gulp.task('favicons', function() {

    const faviconsConfig = {
      appName: "My App",
      appDescription: "This is my application",
      developerName: "Hayden Bleasel",
      developerURL: "http://haydenbleasel.com/",
      background: "#020307",
      path: ".",
      url: "http://haydenbleasel.com/",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/?homescreen=1",
      version: 1.0,
      logging: false,
      html: "../app/template/blocks/favicons.html",
      pipeHTML: true,
      replace: false
    };

    // var config = require('favicons').config;
    //     config.html = $.html;

    // console.log(config.html);

    return $.combine(
    	$.gulp.src($.path.imgs.favicons),
    	$.favicons(faviconsConfig),
      $.gulp.dest($.config.root)
      )
      .on('error', $.gp.notify.onError(error => ({
        title: 'Favicons',
        message: error.message
      })));
  });
};