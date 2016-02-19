var Create = require('../app/js/components/create');

describe('Create directive', () => {

    var create;

    beforeEach(() => {
        create = Object.create(Create);
    });

    it('should set correct default data', () => {
        expect(typeof create.data).toBe('function');
        var data = create.data();

        expect(data.task).toBe('');
        expect(data.source).toBe(null);
    });

    it('should set the source', () => {
        create.$getUser = () => {};
        create.$db = {child(url) {return {};}};
        spyOn(create.$db, 'child');
        spyOn(create, '$getUser').and.returnValue({uid: 1});

        create.ready();

        expect(create.$db.child).toHaveBeenCalled();
        expect(create.$getUser).toHaveBeenCalled();
    });

    it('should have a add method', () => {
        expect(typeof create.methods.add).toBe('function');
    });

    it('should push to firebase when creating', () => {
        create.methods.source = {push(text) {}};
        var testTask = create.methods.task = 'test task';
        spyOn(create.methods.source ,'push');

        create.methods.add();

        expect(create.methods.source.push)
            .toHaveBeenCalledWith({
                title: testTask,
                completed: false
            });
    });

    it('should clear the task variable after pushing', () => {
        create.methods.source = {push() {}};
        create.methods.task = 'task1';
        create.methods.add();
        expect(create.methods.task).toBe('');
    });

});
