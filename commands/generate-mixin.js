var File = require('./support/File');
var clc = require('cli-color');
var dir = '../app/js/mixins/';
// jscs:disable
var name = process.env.npm_config_name;
// jscs:enable

if ((!name || 0 === name.length)) {
    console.log(clc.red('You must specify a name'));
    return;
}

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

