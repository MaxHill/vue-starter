import Vue from 'vue'{{#if_eq lintConfig "google"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "google"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: {App}
}){{#if_eq lintConfig "google"}};{{/if_eq}}