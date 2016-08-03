var Generate = require('./support/Generate');

var component = new Generate('src/components');
component.setContent(`<template>
    <div>
        <p>${component.name} component<p>
        // Template content
    </div>
</template>

<script>
    /**
     * The ${component.name} component.
     * @type {Object}
     */

    export default {
        components: {
            // Sub-components
        },
        methods: {
            // Methods
        }
    };
</script>`);
component.create();
