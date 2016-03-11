var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babel = require('babelify'),
    notifier = require('node-notifier'),
    stringify = require('stringify'),
    jscs = require('gulp-jscs'),
    webserver = require('gulp-webserver'),
    test = require('karma').Server,
    uglify = require('gulp-uglify'),
    gzip = require('gulp-gzip'),
    rename = require("gulp-rename"),
    minifyCss = require('gulp-minify-css');

function compile(watch) {
    var bundler = watchify(browserify('app/js/app.js', {debug: true}).transform(babel, {presets: ['es2015']}).transform(stringify(['.html'])));

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
                compress: {
                    negate_iife: false
                }
            }))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./public/js'))
            .pipe(gzip({ preExtension: 'gz' }))
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
}

function watch() {
    return compile(true);
};

gulp.task('scripts', function() { return compile(); });

gulp.task('styles', function() {
    return gulp.src('app/sass/styles.scss').pipe(sass().on('error', function(error) {
        notifier.notify({
            title: 'Styles failed to compile',
            message: 'Styles compilation failed',
            sound: true,
            icon: './app/images/fail.png',
        });
        console.error(err);
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
    .pipe(gzip({ preExtension: 'gz' }))
    .pipe(gulp.dest('./public/css'))
    .pipe(sourcemaps.write('./'))
    .pipe(notify({
            title: 'Styles',
            message: 'Styles task complete',
            icon: './app/images/success.png',
        }));

});

/**
 * Lint javascript
 */
gulp.task('lintJs', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(jscs())
        .pipe(jscs.reporter('fail'));
});

gulp.task('html', function() {
    gulp.src('./app/index.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('images', function() {
    gulp.src('./app/images/**/*')
    .pipe(gulp.dest('./public/images/'));
});

gulp.task('webserver', function() {
    gulp.src('public')
    .pipe(webserver({
        fallback: 'index.html',
        livereload: true,
        directoryListing: false,
        open: true
    }));
});

/**
 * Run test once and exit
 */
function karmaTest() {
    new test({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function(code) {
      if (code <= 0) {
          notifier.notify({
              title: 'Tests passed',
              message: 'The test suite passed',
              icon: './app/images/success.png',
          });
          return;
      }
      notifier.notify({
          title: 'Tests failed',
          sound: true,
          message: 'The test suite failed with ' + code + ' errors',
          icon: './app/images/fail.png',
      });
  }).start();
};

function karmaTestPreCommit() {
    new test({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function(code) {
        if(code){
            process.exit(-1);
        }
  }).start();
};

gulp.task('test', function() { return karmaTest(); });
gulp.task('test-pre-commit', function() { return karmaTestPreCommit(); });

gulp.task('default', ['images', 'styles', 'scripts', 'html', 'test', 'webserver', 'watch']);

gulp.task('pre-commit', ['lintJs', 'test-pre-commit']);

gulp.task('watch', function() {
    // Watch .js files
    watch();
    gulp.watch('test/**/*.js', ['test']);
    gulp.watch('app/js/**/*.js', ['test']);

    // Watch .scss files
    gulp.watch('app/sass/**/*.scss', ['styles']);

    // Watch images
    gulp.watch('./app/images/**/*', ['images']);

    // Watch html
    gulp.watch('app/index.html', ['html']);
});
