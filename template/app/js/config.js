// Require dev-config if it exists
var configDev = {};
try {
    var configDev = require('./config-dev.js');
} catch (e) {}

// Default config
var config = {
    url: 'http://sara.app'
};

// Override default config with dev-config
module.exports = Object.assign(config,configDev);
