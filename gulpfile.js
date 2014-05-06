var gulp   = require("gulp"),
	coffee = require("gulp-coffee"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify");

gulp.task("build", function() {
	gulp.src(["./sources/modules/*.coffee", "./sources/Lucida.coffee"])
		.pipe(concat("lucida.coffee"))
		.pipe(coffee())
		.pipe(gulp.dest("./dist/"))
});

gulp.task("compress", function() {
	gulp.src(["./sources/modules/*.coffee", "./sources/Lucida.coffee"])
		.pipe(concat("lucida.min.coffee"))
		.pipe(coffee())
		.pipe(uglify({outSourceMap: true}))
		.pipe(gulp.dest("./dist/min/"))
});

gulp.task("default", ["build", "compress"]);