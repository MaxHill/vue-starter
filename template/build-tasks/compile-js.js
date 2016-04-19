var gulp = require('gulp');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var notifier = require('node-notifier');
var stringify = require('stringify');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');
var rename = require('gulp-rename');

module.exports = function(watch) {
    var bundler = watchify(
        browserify('app/js/app.js', {debug: true})
        .transform(babel, {presets: ['es2015']})
        .transform(stringify(['.html'])
    ));

    function rebundle() {
        bundler.bundle()
            .on('error', function(err) {
                notifier.notify({
                    title: 'Scripts filed to compile',
                    message: 'Scripts compilation failed',
                    sound: true,
                    icon: './app/images/fail.png',
                });
                console.error(err);
                this.emit('end');
            })
            .pipe(source('build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(gulp.dest('./public/js'))
            .pipe(uglify({
                compress: {negate_iife: false}
            }))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./public/js'))
            .pipe(gzip({preExtension: 'gz'}))
            .pipe(gulp.dest('./public/js'))
            .pipe(sourcemaps.write('./'))
            .pipe(notify({
                title: 'Scripts compiled',
                message: 'Scripts compiled successfully',
                icon: './app/images/success.png',
            }));
    }

    if (watch) {
        bundler.on('update', function() {
            rebundle();
        });
    }

    rebundle();
};
