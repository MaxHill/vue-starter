module.exports = {
    template: require('./todos.template.html'),
    props: ['authenticated'],
    components: {
        logout: require('../components/logout'),
        create: require('../components/create'),
        list: require('../components/list')
    },
};
