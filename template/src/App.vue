<template>
    <div id="app">
        <img class="logo" src="./assets/logo.png">
        <hello></hello>
        <p>
            Welcome to your Vue.js app!
        </p>
        <p>
            To get a better understanding of how this boilerplate works, check out
            <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
            It is also recommended to go through the docs for
            <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
            <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
            If you have any issues with the setup, please file an issue at this boilerplate's
            <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
        </p>
        <p>
            You may also want to checkout
            <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
            <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
        </p>

        <!-- Don't let the icon sprite take up space -->
        <div style="display:none">
            \{{{ icons }}}
        </div>
    </div>
</template>

<style lang="scss" src="./sass/app.scss"></style>

<script>
import Hello from './components/Hello'{{#if_eq lintConfig "google"}};{{/if_eq}}

export default {
    data() {
        return {
            icons: require('svg-inline?!./assets/icons.svg')
        };
    },
    components: {
        Hello
    }
}{{#if_eq lintConfig "google"}};{{/if_eq}}
</script>


