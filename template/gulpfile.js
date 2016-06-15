var gulp = require('gulp');
var elixir = require('laravel-elixir');

require('./build-tasks/test');
require('./build-tasks/elixir-server');
require('./build-tasks/icons');

elixir.config.assetsPath = 'app';

elixir(function(mix) {
    mix
        .browserify('app.js')
        .sass([
            'styles.scss',
        ], 'public/css')
        .copy('app/index.html', 'public/index.html')
        .copy('app/images/**/*', 'public/images/')
        .icons('icons/**/*.svg');

    // Don't run some tasks in production.
    if (!elixir.config.production) {
        mix
            .test(['app/js/**/*.js', 'test/**/*.js'])
            .serve();
    }
});

// Lint javascript
gulp.task('lint-js', require('./build-tasks/lint-js'));

// e2e tests
var server = require('./build-tasks/server');
var runSequence = require('run-sequence');
var e2eTest = require('./build-tasks/e2e-test-js');
gulp.task('nightwatch', function() { return e2eTest(); });
gulp.task('e2e-server', function() { return server(false,8888); });
gulp.task('e2e', function() {
    runSequence(
        'e2e-server',
        'nightwatch',
        function(err) {
            if (err) {
                process.exit(-1);
            }
            process.exit(1);
        }
    );
});

// Check if we are allowed to commit the code.
gulp.task('pre-commit', [
    'lintJs',
    'test'
]);


// // minify svgs

// var svgmin          = require('gulp-svgmin'),
//     svgstore        = require('gulp-svgstore'),
//     cheerio         = require('gulp-cheerio');

// gulp.task('icons', function() {
//     return gulp.src('./app/images/icons/{,*/}*.svg')
//         .pipe(svgmin())
//         .pipe(svgstore())
//         .pipe(cheerio($ => $('svg').attr('style',  'display:none')))
//         .pipe(gulp.dest(`./public/icons`));
// });

