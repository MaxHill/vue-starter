var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var server = require('./server');

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

Elixir.extend('serve', function(options) {
    var options = setDefaults(options);

    return new Elixir.Task('serve', function() {
        this.recordStep('Starting server on: http://localhost:' + options.port);
        gulpTask(options);
    });
});

/**
 * Create the Gulp task.
 *
 * @param  {object}    options
 * @return {mixed}
 */
function gulpTask(options) {
    return server(options.livereload, options.port);
}

function setDefaults(options) {
    if (typeof options == 'undefined') {
        options = {
            port: 8000,
            livereload: true
        };
    }
    if (typeof options['port'] == 'undefined') {
        options.port = 8000;
    }
    if (typeof options['livereload'] == 'undefined') {
        options.livereload = true;
    }

    return options;
}
