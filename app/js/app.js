// Require what we need.
var Vue = require('vue');
var Example = require('./plugins/example');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

// Use the example plugin
Vue.use(Example);
Vue.use(VueRouter);
Vue.use(VueResource);

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

var Router = new VueRouter({
    history: true
});

Router.map(require('./router.js'));
Router.start(App, '#app');

