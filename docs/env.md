# Summary
Follow the links to read about the different topics.

- [Home](https://github.com/MaxHill/vue-starter/tree/master/docs)
- [Structure](https://github.com/MaxHill/vue-starter/tree/master/docs/structure.md)
- [Build Commands](https://github.com/MaxHill/vue-starter/tree/master/docs/commands.md)
- [Linter Configuration](https://github.com/MaxHill/vue-starter/tree/master/docs/linter.md)
- [Pre-processors](https://github.com/MaxHill/vue-starter/blob/master/docs/pre-processors.md)
- [Handle Static Assets](https://github.com/MaxHill/vue-starter/tree/master/docs/static.md)
- [Environment Variables](https://github.com/MaxHill/vue-starter/tree/master/docs/env.md)
- [Integrate with Backend Framework](https://github.com/MaxHill/vue-starter/tree/master/docs/backend.md)
- [API Proxying During Development](https://github.com/MaxHill/vue-starter/tree/master/docs/proxy.md)
- [Unit](https://github.com/MaxHill/vue-starter/tree/master/docs/unit.md)
- [E2e](https://github.com/MaxHill/vue-starter/tree/master/docs/e2e.md)
- [Prerender](https://github.com/MaxHill/vue-starter/tree/master/docs/prerender.md)


# Environment Variables

Sometimes it is practical to have different config values according to the environment that the application is running in.

As an example:

```js
// config/prod.env.js
module.exports = {
  NODE_ENV: '"production"',
  DEBUG_MODE: false,
  API_KEY: '"..."' // this is shared between all environments
}

// config/dev.env.js
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true // this overrides the DEBUG_MODE value of prod.env
})

// config/test.env.js
module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
```

> **Note:** string variables need to be wrapped into single and double quotes `'"..."'`

So, the environment variables are:
- Production
    - NODE_ENV   = 'production',
    - DEBUG_MODE = false,
    - API_KEY    = '...'
- Development
    - NODE_ENV   = 'development',
    - DEBUG_MODE = true,
    - API_KEY    = '...'
- Testing
    - NODE_ENV   = 'testing',
    - DEBUG_MODE = true,
    - API_KEY    = '...'

As we can see, `test.env` inherits the `dev.env` and the `dev.env` inherits the `prod.env`.

### Usage

It is simple to use the environment variables to your code. For example:

```js
Vue.config.debug = process.env.DEBUG_MODE
```