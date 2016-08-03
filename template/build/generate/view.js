var Generate = require('./support/Generate');

// Create View
var view = new Generate('src/views');
view.setContent(`<template>
    <div>
        <p>${view.name} view<p>
        <!-- Template content -->
    </div>
</template>

<script>
    /**
     * The ${view.name} view.
     * @type {Object}
     */

    export default {
        components: {
            // Components
        },
        methods: {
            // Methods
        }
    };
</script>`);
view.create();
