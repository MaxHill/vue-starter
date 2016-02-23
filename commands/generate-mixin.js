var Generate = require('./support/Generate');

// Create Template
var mixin = new Generate('app/js/mixins');
mixin.setContent(`/**
 * ${ mixin.name } mixin.
 * @type {Object}
 */
module.exports = {
    methods: {
        // methods
    }
};`);
mixin.create();

