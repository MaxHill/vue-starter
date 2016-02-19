var Logout = require('../app/js/components/logout');

describe('Logout directive', () =>  {

    var logout;

    beforeEach(() => {
        logout = Object.create(Logout);
    });

    it('should accept correct data', () =>  {
        expect(typeof logout.props).toBe('object');
        expect(logout.props.indexOf("authenticated") > -1).toBeTruthy();
    });

    it('should have a logout function', () =>  {
        expect(typeof logout.methods.logout).toBe('function');
    });

    it('should call logout plugin function when trying to logout', () =>  {
        logout.methods.$logout = () => {};
        spyOn(logout.methods ,'$logout');

        logout.methods.logout();

        expect(logout.methods.$logout).toHaveBeenCalled();
    });
});
