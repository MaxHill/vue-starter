var gulp = require('gulp');
var nightwatch = require('gulp-nightwatch');
var notifier = require('node-notifier');

module.exports = function() {
    return gulp.src('')
    .pipe(nightwatch({
        configFile: './nightwatch.json'
    }).on('error', function(error) {
        notifier.notify({
            title: 'Tests failed',
            sound: true,
            message: 'The test suite failed',
            icon: './app/images/fail.png',
        });
    }));
    notifier.notify({
        title: 'Tests passed',
        message: 'The test suite passed',
        icon: './app/images/success.png',
    });
};
