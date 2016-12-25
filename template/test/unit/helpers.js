import Vue from 'vue';

module.exports = {

    /**
     * Hook up a component with a vue instance.
     *
     * @param  {object} component Component to be hooked up
     * @return {object} Hooked up component
     */
    bootstrapComponent(component) {
        return new Vue(component).$mount(){{#if_eq lintConfig "google"}};{{/if_eq}}
    }
};
