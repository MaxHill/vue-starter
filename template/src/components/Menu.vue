<template>
    <div
        class="navbar navbar-light navbar-static-top"
        role="banner"
    >
        <div class="clearfix">

            <button
                @click="toggle()"
                class="navbar-toggler pull-xs-right hidden-sm-up"
            >
                <svg width="20" height="20">
                    <use xlink:href='#menu'>
                </svg>
            </button>
            <router-link
                class="navbar-brand hidden-sm-up"
                to="/"
                @click="close()"
            >
                <svg width="30" height="30">
                    <use xlink:href='#logo'>
                </svg>
            </router-link>

        </div>

        <div
            v-bind:class="{'in': vissible}"
            class="collapse navbar-toggleable-xs container"
        >

            <router-link
                class="navbar-brand hidden-xs-down"
                to="/"
            >
                <svg width="30" height="30">
                    <use xlink:href='#logo'>
                </svg>
            </router-link>

            <nav class="nav navbar-nav pull-sm-right">

                <router-link
                    class="nav-item nav-link"
                    to="/"
                    @click="close()"
                >Home</router-link>
                <router-link
                    class="nav-item nav-link"
                    to="/hello"
                    @click="close()"
                >Hello?</router-link>

            </nav>
        </div>
    </div>
</template>

<script>
/**
 * The Menu component.
 * @type {Object}
 */
export default {
    data() {
        return {
            vissible: false
        };
    },
    methods: {
        toggle() {
            this.vissible = !this.vissible;
        },
        close() {
            this.vissible = false;
        }
    }
};
</script>
