module.exports = {
    template: require('./list.template.html'),
    props: ['authenticated'],
    mixins: [require('../mixins/listEvents')],
    watch: {
        'authenticated': function(val, oldVal) {
            if (oldVal == false && val != oldVal) {
                this.fetchTasks();
            }
        }
    },
    data() {
        return {
            tasks: {},
            list: false,
            source: null
        };
    },
    ready() {
        this.source = this.$db.child('todo-lists/' + this.$getUser().uid);

        this.fetchTasks();
        this.listen();

        this.$on('swipe', function(event) {
            this.completed(event.target.id);
        });
    },
    methods: {
        fetchTasks() {
            if (this.authenticated) {
                this.source.once('value', this.setTasks);
            }
        },
        setTasks(snap) {
            this.$set('tasks', snap.val());
            this.$slip(this.list, this.$els.list);
        },
        completed(task) {
            this.source.child(task).update({completed: true});
        },
        remove(task) {
            this.source.child(task).remove();
        },
        undone(task) {
            this.source.child(task).update({completed: false});
        }
    }
};
