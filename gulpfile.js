var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('hello', function(){
	console.log('Hello Zell! :)');
});

gulp.task('concatenate', function(){
	return gulp.src(['./src/index.js', './src/?!(index).js'])
	.pipe(concat('helper.js'))
	.pipe(gulp.dest('./dist/'));
});
