/**
 * Install plugin.
 */
var Firebase = require('firebase');

function firevue(Vue, options) {
    var db = new Firebase('https://testingdoe.firebaseio.com/');
    Vue.prototype.$db = db;
}

module.exports = firevue;
