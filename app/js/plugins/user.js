/**
 * Install plugin.
 */
var Store = require('store');
function user(Vue, options) {

    if (!Store.enabled) {
        alert(
            'Local storage is not supported by your browser. ' +
            'Please disable "Private Mode", or upgrade to a modern browser.'
        );
        return;
    }

    Vue.prototype.$authenticated = function() {
        var authData = this.$db.getAuth();
        if (authData) {
            if (Store.get('user') !== authData) {
                this.$setUser(authData);
            }
            return true;
        }
        Store.remove('user');
        return false;
    };

    Vue.prototype.$logout = function() {
        Store.remove('user');
        this.authenticated = false;
        this.$db.unauth();
    };

    Vue.prototype.$login = function(email, password) {
        this.$db.authWithPassword({
            email: email,
            password: password
        }, function(error, authData) {
            if (error) {
                console.log('Login Failed!', error);
            } else {
                this.authenticated = true;
                this.$setUser(authData);
            }
        }.bind(this));
    };
    Vue.prototype.$register = function(email, password) {
        this.$db.createUser({
            email: email,
            password: password
        }, function(error, userData) {
            if (error) {
                console.log('Error creating user:', error);
            } else {
                this.$login(email, password);
            }
        }.bind(this));
    };
    Vue.prototype.$setUser = function(user) {
        return Store.set('user', user);
    };
    Vue.prototype.$getUser = function() {
        return Store.get('user');
    };
}

module.exports = user;
