var List = require('../app/js/components/list');

describe('list directive', () => {
    var list;

    beforeEach(() => {
        list = Object.create(List);
    });

    it('should set correct default data', () => {
        expect(typeof list.data).toBe('function');
        var data = list.data();

        expect(typeof data.tasks).toBe('object');
        expect(data.source).toBe(null);
    });

    it('should accept correct data', () => {
        expect(typeof list.props).toBe('object');
        expect(list.props.indexOf('authenticated') > -1).toBeTruthy();
    });

    it('should set the source', () => {
        list.$getUser = () => {};
        list.$db = {child(url) {return {};}};
        list.fetchTasks = () => {};
        list.listen = () => {};
        list.$on = () => {};

        spyOn(list.$db, 'child');
        spyOn(list, '$getUser').and.returnValue({uid: 1});

        list.ready();

        expect(list.$db.child).toHaveBeenCalled();
        expect(list.$getUser).toHaveBeenCalled();
    });

    it('should fetch the tasks when ready', () => {
        list.$getUser = () => { return {uid: 1};};
        list.$db = {child(url) {return {};}};
        list.fetchTasks = () => {};
        list.listen = () => {};
        list.$on = () => {};

        spyOn(list, 'fetchTasks');

        list.ready();

        expect(list.fetchTasks).toHaveBeenCalled();
    });

    it('should start to listen for events', () => {
        list.$getUser = () => { return {uid: 1};};
        list.$db = {child(url) {return {};}};
        list.fetchTasks = () => {};
        list.listen = () => {};
        list.$on = () => {};

        spyOn(list, 'listen');

        list.ready();

        expect(list.listen).toHaveBeenCalled();
    });

    it('should be able to fetch tasks', () => {
        list.methods.authenticated = true;
        list.methods.source = {once(value, callback) {}};
        spyOn(list.methods.source, 'once');

        list.methods.fetchTasks();

        expect(list.methods.source.once).toHaveBeenCalled();
    });

    it('should be able to set fetched tasks', () => {
        list.methods.list = [];
        list.methods.$els = {list: ''};
        list.methods.$set = (variable, value) => {};
        list.methods.$slip = (variable, value) => {};
        spyOn(list.methods, '$set');

        list.methods.setTasks({val() {}});

        expect(list.methods.$set).toHaveBeenCalled();
    });

    it('should initiate slip when setting tasks', () => {
        list.methods.list = [];
        list.methods.$els = {list: ''};
        list.methods.$set = (variable, value) => {};
        list.methods.$slip = (variable, value) => {};
        spyOn(list.methods, '$slip');

        list.methods.setTasks({val() {}});

        expect(list.methods.$slip).toHaveBeenCalled();
    });

    it('should have a completed method', () => {
        expect(typeof list.methods.completed).toBe('function');
    });

    it('should have a remove method', () => {
        expect(typeof list.methods.remove).toBe('function');
    });

    it('should have a undone method', () => {
        expect(typeof list.methods.undone).toBe('function');
    });

});
