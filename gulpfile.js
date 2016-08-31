var gulp = require('gulp')
var ghPages = require('gulp-gh-pages')


gulp.task('deploy', function(cb) {
    return gulp.src('./client/**/*')
    	.pipe(ghPages())
})