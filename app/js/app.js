var Vue = require('vue');
var Example = require('./plugins/example');

var scream = require('./mixins/scream');

Vue.use(Example);

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
