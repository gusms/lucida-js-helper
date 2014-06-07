var pkg     = require('./package.json'),
	gulp    = require('gulp'),
	concat  = require('gulp-concat'),
	jshint  = require('gulp-jshint'),
	wrapper = require('gulp-wrapper'),
	uglify  = require('gulp-uglify'),
	zip     = require('gulp-zip'),
	files   = [
		'./sources/modules/*.js',
		'./sources/Lucida.js'
	];

gulp.task('build', function() {
	return gulp.src(files)
		.pipe(concat('lucida.js'))
		.pipe(wrapper({
			header: '(function(window, document){\n"use strict";\n\n',
			footer: '\n})(window, document);'
		}))
		.pipe(gulp.dest('./dist/'))
});

gulp.task('min', function() {
	return gulp.src('./dist/*.js')
		.pipe(concat('lucida.min.js'))
		.pipe(uglify({outSourceMap: true}))
		.pipe(gulp.dest('./dist/min/'))
});

gulp.task('release', function () {
    gulp.src(['./dist/lucida.js','./dist/min/*'])
        .pipe(zip(pkg.name + '.v' + pkg.version + '.min.zip'))
        .pipe(gulp.dest('./release/'));
});

gulp.task('hint', function() {
	gulp.src('./sources/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
});