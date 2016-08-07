<template>
    <div id="app">
        <menu></menu>
        <router-view></router-view>
        <!-- Don't let the icon sprite take up space -->
        <div style="display:none">
            \{{{ icons }}}
        </div>
    </div>
</template>

<style lang="scss" src="assets/sass/app.scss"></style>

<script>
    import Menu from './components/Menu'{{#if_eq lintConfig "google"}};{{/if_eq}}

    export default {
        data() {
            return {icons: require('assets/images/icons.svg')}{{#if_eq lintConfig "google"}};{{/if_eq}}
        },
        components: {Menu}
    }{{#if_eq lintConfig "google"}};{{/if_eq}}
</script>


