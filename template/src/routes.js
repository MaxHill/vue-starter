import NotFound from './views/NotFound'{{#if_eq lintConfig "google"}};{{/if_eq}}
import Home from './views/Home'{{#if_eq lintConfig "google"}};{{/if_eq}}
import Hello from './views/Hello'{{#if_eq lintConfig "google"}};{{/if_eq}}

export default {
    '/': {
        component: Home
    },
    'hello': {
        component: Hello
    },
    '*': {
        component: NotFound
    }
}{{#if_eq lintConfig "google"}};{{/if_eq}}
