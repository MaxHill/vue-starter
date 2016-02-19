// Require what we need.
var Vue = require('vue');
var Example = require('./plugins/example');

// Use the example plugin
Vue.use(Example);

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
