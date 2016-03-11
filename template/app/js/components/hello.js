/**
 * Outputs "Hello" to the page.
 * @type {Object}
 */
module.exports = {
    template: require('./hello.template.html'),

    // Simple mixin thats add function that screams at the user
    mixins: [require('../mixins/scream')],

    data() {
        return {
            person: 'Max',
            index: 1
        };
    },

    methods: {
        changePerson() {
            let persons = ['Max', 'Carina', 'Edward'];
            this.person = persons[this.index];

            this.index ++;
            if (this.index == 3) {
                this.index = 0;
            }

        }
    },

    ready() {
        this.scream();
        var self = this;
        this.changePerson();
        setInterval(function() {
            self.changePerson();
        }, 1100);
    },
};
