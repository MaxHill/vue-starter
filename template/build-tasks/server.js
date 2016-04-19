var gulp = require('gulp');
var webserver = require('gulp-webserver');

module.exports = function() {
    gulp.src('public')
    .pipe(webserver({
        fallback: 'index.html',
        livereload: true,
        directoryListing: false,
        open: false
    }));
};
