var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var cheerio = require('gulp-cheerio');

var $ = Elixir.Plugins;
var config = Elixir.config;

/*
 |----------------------------------------------------------------
 | Webpack Compilation
 |----------------------------------------------------------------
 |
 | This task allowed you to integrate Webpack into your main Gulp
 | and Laravel ELixir workflow. Want Webpack module bundling,
 | but Elixir CSS compilation and versioning? No problem!
 |
 */

Elixir.extend('icons', function(src, output, baseDir) {
    var paths = prepGulpPaths(src, output, baseDir);

    this.onWatch(() => gulp.start('icons'));

    return new Elixir.Task('icons', function() {
        this.log(paths.src, paths.output);

        gulpTask(paths);
    }).watch(paths.src.path);
})

/**
 * Create the Gulp task.
 *
 * @param  {GulpPaths} paths
 * @param  {object}    options
 * @return {mixed}
 */
function gulpTask(paths) {
    return (
        gulp.src(paths.src.path)
        .pipe(svgmin())
        .pipe(svgstore())
        .on('error', function(e) {
            new Elixir.Notification('Icon Compilation failed');

            this.emit('end');
        })
        .pipe(cheerio($ => $('svg').attr('style',  'display:none')))
        .pipe(gulp.dest(paths.output.baseDir))
        .pipe(new Elixir.Notification('Icons Compiled'))
    );
}

/**
 * Prepare the Gulp src and output paths.
 *
 * @param  {mixed}       src
 * @param  {string|null} output
 * @param  {string|null} baseDir
 * @return {void}
 */
function prepGulpPaths(src, output, baseDir) {
    return new Elixir.GulpPaths()
        .src(src, baseDir || './app/images/')
        .output(output || './public/icons/', 'icons.svg');
}
