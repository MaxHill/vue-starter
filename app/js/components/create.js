module.exports = {
    template: require('./create.template.html'),
    data() {
        return {
            source: null,
            task: ''
        };
    },
    ready() {
        this.source = this.$db.child('todo-lists/' + this.$getUser().uid);
    },
    methods: {
        add() {
            this.source.push({
                title: this.task,
                completed: false,
            });
            this.task = '';
        },
    }
};
