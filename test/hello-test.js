var Help = require('./test-helper.js');
var component = Help.bootstrapComponent(require('../app/js/components/hello'));

describe('Hello', () => {
    it('should exist', () => {
        expect(typeof component).toBe('object');
    });

    it('should be able to bootstrap a component', () => {
        expect(component.name).toBe('Max');
    });

    it('should be able to call a method on a bootstraped component', () => {
        expect(component.name).toBe('Max');
        component.changeName();
        expect(component.name).toBe('Carina');
    });
});
