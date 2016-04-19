var gulp = require('gulp');
var postcss = require('gulp-postcss');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var lost = require('lost');
var notifier = require('node-notifier');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

module.exports = function() {
    return gulp.src('app/sass/styles.scss')
    .pipe(sass().on('error', function(error) {
        notifier.notify({
            title: 'Styles failed to compile',
            message: 'Styles compilation failed',
            sound: true,
            icon: './app/images/fail.png',
        });
        console.error(error);
        this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(gulp.dest('./public/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'))
    .pipe(gzip({preExtension: 'gz'}))
    .pipe(gulp.dest('./public/css'))
    .pipe(sourcemaps.write('./'))
    .pipe(notify({
            title: 'Styles',
            message: 'Styles task complete',
            icon: './app/images/success.png',
        }));

};
