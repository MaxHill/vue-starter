var Vue = require('vue');

module.exports = {
    // Hook component with a vue instance.
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
