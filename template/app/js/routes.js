module.exports = {
    '/': {
        component: require('./views/welcome')
    },
    '/about': {
        component: require('./views/about')
    },
    '*': {
        component: require('./views/404')
    }
};
