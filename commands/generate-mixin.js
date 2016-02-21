var File = require('./support/File');
var dir = '../app/js/mixins/';
// jscs:disable
var name = process.env.npm_config_name;
// jscs:enable


var mixin = dir + name + '.js';

var mixinContent = `/**
 * Simple mixin thats add function that screams at the user
 * @type {Object}
 */
module.exports = {
    methods: {
        // methods
    }
};`;

File.create(mixin, mixinContent);

