var gulp = require('gulp');
var webserver = require('gulp-webserver');

module.exports = function(livereload, port) {
    if (typeof port == 'undefined') {
        port = 8000;
    }
    if (typeof livereload == 'undefined') {
        livereload = true;
        console.log('server.js', 'Yes livererload');
    }
    gulp.src('public')
    .pipe(webserver({
        fallback: 'index.html',
        livereload: livereload,
        directoryListing: false,
        open: false,
        port: port
    }));
};
