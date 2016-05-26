var gulp = require('gulp');
var shell = require('gulp-shell');
var Elixir = require('laravel-elixir');
var notifier = require('node-notifier');
var Test = require('karma').Server;

var Task = Elixir.Task;

Elixir.extend('test', function(src) {

    new Task('test', function() {
        return new Test({
            configFile: __dirname + '/../karma.conf.js',
            singleRun: true
        }, function(code) {
            if (code <= 0) {
                notifier.notify({
                    title: 'Tests passed',
                    message: 'The test suite passed',
                    icon: './app/images/success.png',
                });
                return;
            }else {
                notifier.notify({
                    title: 'Tests failed',
                    sound: true,
                    message: 'The test suite failed',
                    icon: './app/images/fail.png',
                });
            }
        }).start();
    }).watch(src);

});
