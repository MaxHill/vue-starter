module.exports = {
    template: require('./register.template.html'),
    props: ['authenticated'],
    data() {
        return {
            email: 'crap',
            password: ''
        };
    },
    methods: {
        register() {
            this.$register(this.email, this.password);
        }
    }
};
