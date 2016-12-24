import NotFound from './views/NotFound'{{#if_eq lintConfig "google"}};{{/if_eq}}
import Home from './views/Home'{{#if_eq lintConfig "google"}};{{/if_eq}}
import Hello from './views/Hello'{{#if_eq lintConfig "google"}};{{/if_eq}}

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/hello',
        component: Hello
    },
    {
        path: '*',
        component: NotFound
    }
]{{#if_eq lintConfig "google"}};{{/if_eq}}
