'use strict'

module.exports = function($) {
	$.gulp.task('serve', function() {
		$.browserSync.init({
			open: false,
			server: $.config.root
			// proxy: 'lait.pro'
		});
		$.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
	})
}