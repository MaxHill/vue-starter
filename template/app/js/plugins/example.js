/**
 * Example plugin that tells it like it is.
 *
 * @param  {instance} Vue
 * @param  {object} options
 */

function example(Vue, options) {
    Vue.prototype.$pluginSay = function() {
        console.log('I\'m a plugin');
    };
}

module.exports = example;
