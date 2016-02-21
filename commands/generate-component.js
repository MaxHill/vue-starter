var File = require('./support/File');
var dir = '../app/js/components/';
// jscs:disable
var name = process.env.npm_config_name;
// jscs:enable

var component = dir + name + '.js';
var template = dir + name + '.template.html';

var componentContent = `/**
 * The ${name} view.
 * @type {Object}
 */
module.exports = {
    template: require('./${ name }.template.html'),
    components: {
        // components
    },
    methods: {
        // methods
    },
};`;

var templateContent = `<p>${name} component</p>`;

File.create(component, componentContent);
File.create(template, templateContent);

