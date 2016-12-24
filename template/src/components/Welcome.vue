<template>
    <div class="Welcome">
        <h1 class="Welcome__title">\{{ msg }}</h1>
        <nav class="Welcome__links">
            <a
                v-for="link in links"
                class="Welcome__link"
                v-bind:href="link.url"
            >\{{ link.name }}</a>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // note: changing this line won't causes changes
                // with hot-reload because the reloaded component
                // preserves its current state and we are modifying
                // its initial state.
                msg: 'Build something awesome!',
                links: [
                    {
                        name: 'Github',
                        url: 'https://github.com/MaxHill/vue-starter'
                    },
                    {
                        name: 'Documentation',
                        url: 'https://github.com/MaxHill/vue-starter/wiki'
                    },
                    {
                        name: 'Max',
                        url: 'https://twitter.com/maxpeterhill'
                    }
                ]
            }{{#if_eq lintConfig "google"}};{{/if_eq}}
        }
    }{{#if_eq lintConfig "google"}};{{/if_eq}}
</script>
