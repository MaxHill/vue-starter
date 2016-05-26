var gulp = require('gulp');
var elixir = require('laravel-elixir');

require('./build-tasks/test');

elixir.config.assetsPath = 'app';

elixir(function(mix) {
    mix
        .browserify('app.js')
        .sass([
            'styles.scss',
        ], 'public/css')
        .copy('app/index.html', 'public/index.html')
        .copy('app/images/**/*', 'public/images/')
        .test(['app/js/**/*.js', 'test/**/*.js'])
        .task('serve');
});

// Lint javascript
gulp.task('lint-js', require('./build-tasks/lint-js'));

// Start server
var server = require('./build-tasks/server');
gulp.task('serve', function() { return server(); });

// e2e tests
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
