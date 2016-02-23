var Generate = require('./support/Generate');

// Create Component
var component = new Generate('app/js/components');
component.setContent(`/**
 * The ${ component.name } view.
 * @type {Object}
 */
module.exports = {
    template: require('./${ component.name }.template.html'),
    components: {
        // components
    },
    methods: {
        // methods
    },
};`);
component.create();

// Create Template
var template = new Generate('app/js/views', 'template.html');
template.setContent(`<p>${ template.name } component</p>`);
template.create();

