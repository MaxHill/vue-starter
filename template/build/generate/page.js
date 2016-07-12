var Generate = require('./support/Generate');

// Create Template
var page = new Generate('app/js/views');
page.setContent(`/**
 * The ${ page.name } view.
 * @type {Object}
 */
module.exports = {
    template: require('./${ page.name }.template.html'),
    components: {
        // components
    },
};`);
page.create();

// Create Template
var template = new Generate('app/js/views', 'template.html');
template.setContent(`<h2>${ template.capitalize(template.name) } view</h2>`);
template.create();
