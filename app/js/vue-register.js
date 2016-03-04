var Vue = require('vue');

/**
 * Register plugins.
 */
Vue.use(require('./plugins/example'));
Vue.use(require('vue-router'));
Vue.use(require('vue-resource'));

module.exports = Vue;
