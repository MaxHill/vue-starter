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
            name: 'Max',
            index: 1
        };
    },

    methods: {
        changeName() {
            let names = ['Max', 'Carina', 'Edward'];
            this.name = names[this.index];

            this.index ++;
            if (this.index == 3) {
                this.index = 0;
            }

        }
    },

    ready() {
        this.scream();
        var self = this;
        this.changeName();
        setInterval(function() {
            self.changeName();
        }, 1100);
    },
};
