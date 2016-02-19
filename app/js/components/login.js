module.exports = {
    template: require('./login.template.html'),
    props: ['authenticated'],
    data: function() {
        return {
            email: 'max.skrap.mail@gmail.com',
            password: 'secret'
        };
    },
    methods: {
        login() {
            this.$login(this.email, this.password);
        }
    }
};
