var Login = require('../app/js/components/login');

describe('Login directive', () => {
    var login;

    beforeEach(() => {
        login = Object.create(Login);
    });

    it('should set correct default data', () => {
        expect(typeof login.data).toBe('function');
        var data = login.data();
        expect(data.email).toBe('max.skrap.mail@gmail.com');
    });

    it('should accept correct data', () => {
        expect(typeof login.props).toBe('object');
        expect(login.props.indexOf('authenticated') > -1).toBeTruthy();
    });

    it('should have a login function', () => {
        expect(typeof login.methods.login).toBe('function');
    });

    it('should call login plugin function when trying to login', () => {
        login.methods.$login = () => {};
        spyOn(login.methods ,'$login');

        login.methods.login();

        expect(login.methods.$login).toHaveBeenCalled();
    });

});
