import Vue from 'vue'{{#if_eq lintConfig "google"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "google"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "google"}};{{/if_eq}}
import routes from './routes'{{#if_eq lintConfig "google"}};{{/if_eq}}

Vue.use(VueRouter){{#if_eq lintConfig "google"}};{{/if_eq}}

const Router = new VueRouter({history: true}){{#if_eq lintConfig "google"}};{{/if_eq}}

Router.map(routes){{#if_eq lintConfig "google"}};{{/if_eq}}

Router.start({
    components: {App}
}, 'body'){{#if_eq lintConfig "google"}};{{/if_eq}}
