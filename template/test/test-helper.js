var Vue = require('../app/js/vue-register');
const proxyquire = require('proxyquireify')(require);

var Vue = proxyquire('../app/js/vue-register', {
    'vue-resource': require('./mocks/resource')
});

module.exports = {

    /**
     * Hook up a component with a vue instance.
     *
     * @param  {object} component
     * @return {object}
     */
    bootstrapComponent(component) {
        let vm = new Vue({
            template: '<div><test v-ref:test-component></test></div>',
            components: {
                'test': component
            }
        }).$mount();
        return vm.$refs.testComponent;
    },

    /**
     * Hook up a mixin with a component and vue instance.
     *
     * @param  {object} mixin
     * @return {object}
     */
    bootstrapMixin(mixin) {
        let vm = new Vue({
            template: '<div><test v-ref:test-component></test></div>',
            components: {
                'test': {
                    template: '<div></div>',
                    mixins: [mixin]
                }
            }
        }).$mount();

        return vm.$refs.testComponent;
    },
};
