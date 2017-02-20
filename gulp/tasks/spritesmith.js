'use strict';

module.exports = function() {
    $.gulp.task('sprite:img', function() {
        var spriteData = $.gulp.src('./source/img/*.*').
        pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));

        var imgStream = spriteData.img
            .pipe($.gulp.dest('./source/images'));

        var cssStream = spriteData.css
            .pipe($.gulp.dest('./source/style/common'));

        return $.merge(imgStream, cssStream);
    })
};
