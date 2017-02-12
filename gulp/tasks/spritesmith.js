'use strict';

var gulp = require('gulp'),
	spritesmith = require('gulp.spritesmith');
 
gulp.task('sprite', function () {
  var spriteData = gulp.src('images/*.png').
    pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  
  var imgStream = spriteData.img
    .pipe(gulp.dest('./source/images'));
  
  var cssStream = spriteData.css
    .pipe(gulp.dest('./source/style/common'));
 
  return merge(imgStream, cssStream);
});
};