var gulp = require('gulp');
var Test = require('karma').Server;
var notifier = require('node-notifier');

module.exports = function(preCommit) {
    new Test({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true
    }, function(code) {
        if (code && preCommit) {
            process.exit(-1);
        }else if (code <= 0) {
            notifier.notify({
                title: 'Tests passed',
                message: 'The test suite passed',
                icon: './app/images/success.png',
            });
            return;
        }else if (!preCommit) {
            notifier.notify({
                title: 'Tests failed',
                sound: true,
                message: 'The test suite failed with ' + code + ' errors',
                icon: './app/images/fail.png',
            });
        }
    }).start();
};
