var gulp = require('gulp');
var runSequence = require('run-sequence');


/**
 * Webserver
 */

// Start server
var server = require('./build-tasks/server');
gulp.task('webserver', function() { return server(); });


/**
 * Scripts
 */

// Compile
var compile = require('./build-tasks/compile-js');
gulp.task('scripts', function() { return compile(); });

// Lint javascript
gulp.task('lintJs', require('./build-tasks/lint-js'));


/**
 * Tests
 */

// Unit tests - once and notify
var unitTest = require('./build-tasks/unit-test-js');
gulp.task('test', function() { return unitTest(); });
gulp.task('test-pre-commit', function() { return unitTest(true); });

// e2e tests
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


/**
 * Styles
 */

// Styles transformation
var styles = require('./build-tasks/compile-css');
gulp.task('styles', function() { return styles(); });


/**
 * Move assets
 */

// Move index.html
gulp.task('html', function() {
    gulp.src('./app/index.html')
    .pipe(gulp.dest('./public'));
});

// Move images
gulp.task('images', function() {
    gulp.src('./app/images/**/*')
    .pipe(gulp.dest('./public/images/'));
});

/**
 * Build
 */

// Do everything and start the watch command.
gulp.task('default', [
    'images',
    'styles',
    'scripts',
    'html',
    'test',
    'webserver',
    'watch'
]);

// Check if we are allowed to commit the code.
gulp.task('pre-commit', [
    'lintJs',
    'test-pre-commit'
]);

// Watch and run tasks on change.
gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('test/**/*.js', ['test']);
    gulp.watch('app/js/**/*.js', ['test', 'scripts']);

    // Watch .scss files
    gulp.watch('app/sass/**/*.scss', ['styles']);

    // Watch assets
    gulp.watch('./app/images/**/*', ['images']);
    gulp.watch('app/index.html', ['html']);

});
