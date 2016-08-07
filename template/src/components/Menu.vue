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
            <a
                class="navbar-brand hidden-sm-up"
                v-link="{ path: '/' }"
                @click="close()"
            >
                <svg width="30" height="30">
                    <use xlink:href='#logo'>
                </svg>
            </a>

        </div>

        <div
            v-bind:class="{'in': vissible}"
            class="collapse navbar-toggleable-xs container"
        >

            <a
                class="navbar-brand hidden-xs-down"
                v-link="{ path: '/' }"
            >
                <svg width="30" height="30">
                    <use xlink:href='#logo'>
                </svg>
            </a>

            <nav class="nav navbar-nav pull-sm-right">

                <a
                    class="nav-item nav-link"
                    v-link="{ path: '/' }"
                    @click="close()"
                >Home</a>
                <a
                    class="nav-item nav-link"
                    v-link="{ path: '/hello' }"
                    @click="close()"
                >Hello?</a>

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
