var gulp = require('gulp')
var ghPages = require('gulp-gh-pages')
var path = require('path')


gulp.task('deploy', ['compile'], function(cb) {
    return gulp.src('./_site/**/*')
    	.pipe(ghPages())
})

gulp.task('compile', ['dist', 'examples'])

gulp.task('dist', function() {
    return gulp.src('./dist/**/*')
        .pipe(gulp.dest('./_site/dist'))
})

gulp.task('examples', function() {
	return gulp.src('./examples/**/*')
        .pipe(gulp.dest('./_site/examples'))
})
