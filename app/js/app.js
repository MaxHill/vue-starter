var Vue = require('vue');
var VueValidator = require('vue-validator');
var db = require('./plugins/firevue');
var user = require('./plugins/user');
var SlipVue = require('./plugins/slip-vue');

Vue.use(SlipVue);
Vue.use(VueValidator);
Vue.use(db);
Vue.use(user);

new Vue({
    el: '#app',
    data: {
        authenticated: false,
    },
    ready() {
        this.authenticated = this.$authenticated();
    },
    components: {
        authenticate: require('./views/authenticate'),
        todos: require('./views/todos')
    },
});
