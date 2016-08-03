<template>
    <div class="container">
        <welcome></welcome>
    </div>
</template>

<script>
    /**
     * The Home view.
     * @type {Object}
     */
    import Welcome from '../components/Welcome'{{#if_eq lintConfig "google"}};{{/if_eq}}

    export default {
        components: {
            Welcome
        }
    };
</script>
