var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourceMaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');

function swallowError(error) {
	console.log(error.toString());
	this.emit('end');
}

gulp.task('bundle-js', done => {
	gulp.src([
		'./src/fraudio.js',
	]).on('error', swallowError)
		.pipe(sourceMaps.init())
		.pipe(uglify())
		.pipe(concat('fraudio.min.js'))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest('./build'));
	done();
});

gulp.task('bundle-css', done => {
	gulp.src([
		'./src/fraudio.scss',
	]).on('error', swallowError)
		.pipe(sourceMaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCss())
		.pipe(concat('fraudio.min.css'))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest('./build'));
	done();
});

gulp.task('default', gulp.parallel(['bundle-js', 'bundle-css']));

gulp.task('watch-files', done => {
	gulp.watch(['./src/**/*'], gulp.series('default'));
});

// run build before starting watch
gulp.task('watch', gulp.series(['default', 'watch-files']));