let Vue = require('./vue-register');

/**
 * Vue root instance
 */
let App = Vue.extend({
    data() {
        return {};
    },
    ready() {
        // From example plugin
        this.$pluginSay();
    },
    components: {
        navigation: require('./components/nav')
    }
});

let VueRouter = require('vue-router');
let Router = new VueRouter({history: true});
Router.map(require('./routes.js'));
Router.start(App, '#app');

