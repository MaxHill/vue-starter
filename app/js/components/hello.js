/**
 * Outputs "Hello" to the page.
 * @type {Object}
 */
module.exports = {
    template: require('./hello.template.html'),

    // Simple mixin thats add function that screams at the user
    mixins: [require('../mixins/scream')],

    data        () {
        return {};
    },

    ready() {
        this.scream();
    },

    methods: {}
};
