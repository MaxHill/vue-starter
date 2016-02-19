/**
 * The welcome view greeting the user.
 * @type {Object}
 */
module.exports = {
    template: require('./welcome.template.html'),
    components: {
        hello: require('../components/hello'),
    },
};
