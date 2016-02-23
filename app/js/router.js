module.exports = {
    '/': {
        component: require('./views/welcome')
    },
    '/about': {
        component: require('./views/about')
    },
    '/yolo': {
        component: require('./views/yolo')
    },
    '*': {
        component: require('./views/404')
    }
};
