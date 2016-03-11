var Vue = require('vue');

module.exports = {

    /**
     * Hook up a component with and clean vue instance.
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
    }
};
