module.exports = {
    template: require('./authenticate.template.html'),
    props: ['authenticated'],
    components: {
        login: require('../components/login'),
        register: require('../components/register')
    },
};
