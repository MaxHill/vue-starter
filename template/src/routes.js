import NotFound from './views/NotFound'{{#if_eq lintConfig "google"}};{{/if_eq}}
import Home from './views/Home'{{#if_eq lintConfig "google"}};{{/if_eq}}
import Hello from './views/Hello'{{#if_eq lintConfig "google"}};{{/if_eq}}

export default [
    {
        path: '/',
        component: Home{{#if_eq lintConfig "google"}},{{/if_eq}}
    },
    {
        path: '/hello',
        component: Hello{{#if_eq lintConfig "google"}},{{/if_eq}}
    },
    {
        path: '*',
        component: NotFound{{#if_eq lintConfig "google"}},{{/if_eq}}
    }{{#if_eq lintConfig "google"}},{{/if_eq}}
]{{#if_eq lintConfig "google"}};{{/if_eq}}
