<template>
    <nav class="navbar navbar-light navbar-fixed-top bg-faded">
        <div class="clearfix hidden-md-up">
            <router-link class="navbar-brand" to="/">
                <svg width="30" height="30">
                    <use xlink:href='#logo'>
                </svg>
            </router-link>

            <button
                @click="toggle()"
                class="float-xs-right btn align-middle btn-outline-secondary"
                type="button"
            >
                <svg width="20" height="20">
                    <use xlink:href='#menu'>
                </svg>
            </button>
        </div>

        <router-link class="navbar-brand hidden-sm-down" to="/">
            <svg width="30" height="30">
                <use xlink:href='#logo'>
            </svg>
        </router-link>

        <div
            v-bind:class="{'in': vissible}"
            class="collapse navbar-toggleable-sm"
        >
            <ul class="nav navbar-nav float-xs-none float-md-right">
                <li class="nav-item">
                    <router-link
                        v-on:click.native="close()"
                        class="nav-link"
                        to="/"
                    >Home</router-link>
                </li>

                <li class="nav-item">
                    <router-link
                        v-on:click.native="close()"
                        class="nav-link"
                        to="/hello"
                    >Hello</router-link>
                </li>
            </ul>
        </div>
    </nav>
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
