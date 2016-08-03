<template>
    <div class="Hero">
        <h1 class="Hero__title">\{{ msg }}</h1>
        <p class="Hero__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum animi natus voluptate ab harum cupiditate, quo accusantium cumque nihil, mollitia, beatae. Neque officiis, quaerat voluptas numquam vel provident. Alias, praesentium.</p>
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
            msg: 'Welcome to vue-starter'
        }{{#if_eq lintConfig "google"}};{{/if_eq}}
    }
}{{#if_eq lintConfig "google"}};{{/if_eq}}
</script>
