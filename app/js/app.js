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
new Vue({
    el: '#app',
    data: {},
    ready() {
        //From example plugin
        this.$pluginSay();
    },
    components: {
        welcome: require('./views/welcome'),
    },
});
