import Vue from 'vue';

module.exports = {

    /**
     * Hook up a component with a vue instance.
     *
     * @param  {object} component Component to be hooked up
     * @return {object} Hooked up component
     */
    bootstrapComponent(component) {
        let vm = new Vue({
            template: '<div><test v-ref:test-component></test></div>',
            components: {
                test: component
            }
        }).$mount();

        return vm;
    }
};
