var listEvents = require('../../app/js/mixins/listEvents');

describe('List events mixin', () => {

    it('should have a listen method', () => {
        expect(typeof listEvents.methods.listen).toBe('function');
    });

    it('should have a onRemove method', () => {
        expect(typeof listEvents.methods.onRemove).toBe('function');
    });

    it('should have a onAdd method', () => {
        expect(typeof listEvents.methods.onAdd).toBe('function');
    });

    it('should have a onChange method', () => {
        expect(typeof listEvents.methods.onChange).toBe('function');
    });

    it('should have a onMove method', () => {
        expect(typeof listEvents.methods.onMove).toBe('function');
    });

});
