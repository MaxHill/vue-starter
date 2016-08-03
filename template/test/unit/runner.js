var Test = require('karma').Server;

new Test({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
}, function(code){
    if (code !== 0){
        process.exit(-1);
    }
    process.exit();
}).start();

