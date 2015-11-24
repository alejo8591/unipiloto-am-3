/*
* Dependencias
*/
var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
	uglify = require('gulp-uglify');


/*
* Configuración de la tarea 'demo'
*/
gulp.task('scripts', function(){
	gulp.src(['source/js/jquery-1.11.2.min.js', 'source/js/lab10.js'])
		.pipe(concat('lab9.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'))
});

gulp.task('concat-css', function(){
    return gulp.src(['source/css/normalize.css', 'source/css/skeleton.css', 'source/css/styles.css'])
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('source/css/'));
});

gulp.task('deploy', ['concat-css', 'scripts'], function(){
  return gulp.src('source/css/bundle.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'));
});
