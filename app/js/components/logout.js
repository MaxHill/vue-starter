module.exports = {
    template: require('./logout.template.html'),
    props: ['authenticated'],
    methods: {
        logout() {
            this.$logout();
        }
    }
};
