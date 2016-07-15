<template>
    <div id="app">
        <menu></menu>
        <home></home>

        <!-- Don't let the icon sprite take up space -->
        <div style="display:none">
            \{{{ icons }}}
        </div>
    </div>
</template>

<style lang="scss" src="./sass/app.scss"></style>

<script>
import Menu from './components/Menu'{{#if_eq lintConfig "google"}};{{/if_eq}}
import Home from './views/Home'{{#if_eq lintConfig "google"}};{{/if_eq}}

export default {
    data() {
        return {
            icons: require('svg-inline?!./assets/icons.svg')
        };
    },
    components: {
        Home,
        Menu
    }
}{{#if_eq lintConfig "google"}};{{/if_eq}}
</script>


