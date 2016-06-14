/**
 * Outputs navigaion to the page.
 * @type {Object}
 */
module.exports = {
    template: require('./nav.template.html'),

    data() {
        return {
            vissible: false
        };
    },

    methods: {
        toggle() {
            this.vissible = !this.vissible;
        }
    }
};
