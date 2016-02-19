var Scream = require('../mixins/scream');
module.exports = {
    template: require('./hello.template.html'),
    mixins: [Scream],
    data() {
        return {};
    },
    ready() {
        this.scream();
    },
    methods: {}
};
