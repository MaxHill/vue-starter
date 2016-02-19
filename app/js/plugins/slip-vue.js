/**
 * Install plugin.
 */
require('../../../node_modules/slipjs/slip.js');

function slip(Vue, options) {
    Vue.prototype.$slip = function(list, el, events) {
        list = el;
        new Slip(list);
        var self = this;

        list.addEventListener('slip:beforeswipe', handle);
        list.addEventListener('slip:swipe', handle);
        list.addEventListener('slip:beforereorder', handle);
        list.addEventListener('slip:beforewait', handle);
        list.addEventListener('slip:reorder', handle);

        function handle(e) {
            var event = e.type.replace('slip:', '');
            self.$emit(event, e);
        }
    };
}

module.exports = slip;
