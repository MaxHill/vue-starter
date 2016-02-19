var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    notify = require('gulp-notify'),
    sass = require('gulp-ruby-sass'),
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
    test = require('karma').Server;

function compile(watch) {
    var bundler = watchify(browserify('app/js/app.js', {debug: true}).transform(babel, {presets: ['es2015']}).transform(stringify(['.html'])));

    function rebundle() {
        bundler.bundle()
            .on('error', function(err) {
                notifier.notify({
                    title: 'Scripts filed to compile',
                    message: 'Scripts compilation failed',
                    sound: true,
                    icon: './public/images/fail.png',
                });
                console.error(err);
                this.emit('end');
            })
            .pipe(source('build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./public/js'))
            .pipe(notify({
                title: 'Scripts compiled',
                message: 'Scripts compiled successfully',
                icon: './public/images/success.png',
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
    return sass('app/sass/styles.scss', {
        'sourcemap=none': true,
        style: 'expanded'
    }).on('error', function(error) {
        notifier.notify({
            title: 'Styles failed to compile',
            message: 'Styles compilation failed',
            sound: true,
            icon: './public/images/fail.png',
        });
        console.error(err);
        this.emit('end');
    })
    .pipe(sourcemaps.init())
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/css'))
    .pipe(notify({
            title: 'Styles',
            message: 'Styles task complete',
            icon: './public/images/success.png',
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

gulp.task('webserver', function() {
    gulp.src('public')
    .pipe(webserver({
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
              icon: './public/images/success.png',
          });
          return;
      }
      notifier.notify({
          title: 'Tests failed',
          sound: true,
          message: 'The test suite failed with ' + code + ' errors',
          icon: './public/images/fail.png',
      });
  }).start();
};

gulp.task('test', function() { return karmaTest(); });

gulp.task('default', ['styles', 'scripts', 'html', 'test', 'webserver', 'watch']);

gulp.task('pre-commit', ['lintJs']);

gulp.task('watch', function() {
    // Watch .js files
    watch();
    gulp.watch('test/**/*.js', ['test']);
    gulp.watch('app/js/**/*.js', ['test']);

    // Watch .scss files
    gulp.watch('app/sass/**/*.scss', ['styles']);

    gulp.watch('app/index.html', ['html']);
});
