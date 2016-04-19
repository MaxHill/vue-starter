var gulp = require('gulp');
var jscs = require('gulp-jscs');

module.exports = function() {
    return gulp.src('app/js/**/*.js')
        .pipe(jscs())
        .pipe(jscs.reporter('fail'));
};
