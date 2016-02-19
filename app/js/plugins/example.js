/**
 * Install plugin.
 */

function example(Vue, options) {
    Vue.prototype.$pluginSay = function() {
       alert('I\'m a plugin');
    };
}

module.exports = example;
