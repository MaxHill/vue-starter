import Vue from 'vue'{{#if_eq lintConfig "google"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "google"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "google"}};{{/if_eq}}
import routes from './routes'{{#if_eq lintConfig "google"}};{{/if_eq}}

Vue.use(VueRouter){{#if_eq lintConfig "google"}};{{/if_eq}}

const router = new VueRouter({
    mode: 'history',
    routes
}){{#if_eq lintConfig "google"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router
}){{#if_eq lintConfig "google"}};{{/if_eq}}
