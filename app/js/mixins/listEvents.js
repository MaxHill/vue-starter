module.exports = {
    methods: {
        listen() {
            this.onRemove();
            this.onAdd();
            this.onChange();
            this.onMove();
        },
        onRemove() {
            this.source.on(
                'child_removed',
                function(oldChildSnapshot) {
                    this.fetchTasks();
                }.bind(this));
        },
        onAdd() {
            this.source.on(
                'child_added',
                function(childSnapshot, prevChildKey) {
                    this.fetchTasks();
                }.bind(this));
        },
        onChange() {
            this.source.on(
                'child_changed',
                function(childSnapshot, prevChildKey) {
                    this.fetchTasks();
                }.bind(this));
        },
        onMove() {
            this.source.on(
                'child_moved',
                function(childSnapshot, prevChildKey) {
                    this.fetchTasks();
                }.bind(this));
        }
    }
};
