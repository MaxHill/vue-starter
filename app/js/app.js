var Vue = require('vue');

/**
 * Register plugins.
 */
Vue.use(require('./plugins/example'));
Vue.use(require('vue-router'));
Vue.use(require('vue-resource'));

/**
 * Vue root instance
 */
var App = Vue.extend({
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

var Router = new VueRouter({history: true});
Router.map(require('./router.js'));
Router.start(App, '#app');

