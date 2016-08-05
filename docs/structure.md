# Summary
Follow the links to read about the different topics.

- [Home](https://github.com/MaxHill/vue-starter/tree/master/docs)
- [Structure](https://github.com/MaxHill/vue-starter/tree/master/docs/structure.md)
- [Build Commands](https://github.com/MaxHill/vue-starter/tree/master/docs/commands.md)
- [Linter Configuration](https://github.com/MaxHill/vue-starter/tree/master/docs/linter.md)
- [Pre-processor](https://github.com/MaxHill/vue-starter/tree/master/docs/pre-processor.md)
- [Handle Static Assets](https://github.com/MaxHill/vue-starter/tree/master/docs/static.md)
- [Environment Variables](https://github.com/MaxHill/vue-starter/tree/master/docs/env.md)
- [Integrate with Backend Framework](https://github.com/MaxHill/vue-starter/tree/master/docs/backend.md)
- [API Proxying During Development](https://github.com/MaxHill/vue-starter/tree/master/docs/proxy.md)
- [Unit](https://github.com/MaxHill/vue-starter/tree/master/docs/unit.md)
- [E2e](https://github.com/MaxHill/vue-starter/tree/master/docs/e2e.md)
- [Prerender](https://github.com/MaxHill/vue-starter/tree/master/docs/prerender.md)


# Project Structure

``` bash
.
├── build/                      # webpack config files & generators
│   └── generators/             # generators
│   └── ...
├── config/                     
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── assets/                     # static assets
│   │   ├── images                  # images and icons
│   │   │   └── ...
│   │   ├── sass                    # sass files
│   │   │   └── ...
│   ├── main.js                 # app entry file
│   ├── routes.js               # application routes
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   ├── views/                  # view components to use in router
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   │   └── helpers.js       	  # test helpers
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .editorconfig.js            # editor config
├── .eslintrc.js                # eslint config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```
 

### `build/`

This directory holds the actual configurations for both the development server and the production webpack build. Normally you don't need to touch these files unless you want to customize Webpack loaders, in which case you should probably look at `build/webpack.base.conf.js`.

### `config/index.js`

This is the main configuration file that exposes some of the most common configuration options for the build setup. See [API Proxying During Development](https://github.com/MaxHill/vue-starter/tree/master/docs/proxy.md) and [Integrating with Backend Framework](backend.md) for more details.

### `src/`

This is where most of your application code will live in. How to structure everything inside this directory is largely up to you; if you are using Vuex, you can consult the [recommendations for Vuex applications](http://vuex.vuejs.org/en/structure.html).

### `src/assets/`

This directory holds your static assets like **images**, **icons** and **sass**. Svg icons gets bundled into a svg-sprite when you run `npm run icons` or watched for changes when you run `npm run icons:watch` / `npm run dev`.

### `static/`

This directory is an escape hatch for static assets that you do not want to process with Webpack. They will be directly copied into the same directory where webpack-built assets are generated.

See [Handling Static Assets](https://github.com/MaxHill/vue-starter/tree/master/docs/static.md) for more details.

### `test/unit`

Contains unit test related files. See [Unit Testing](https://github.com/MaxHill/vue-starter/tree/master/docs/unit.md) for more details.

### `test/e2e`

Contains e2e test related files. See [End-to-end Testing](https://github.com/MaxHill/vue-starter/tree/master/docs/e2e.md) for more details.

### `index.html`

This is the **template** `index.html` for our single page application. During development and builds, Webpack will generate assets, and the URLs for those generated assets will automatically injected into this template to render the final HTML.

### `package.json`

The NPM package meta file that contains all the build dependencies and [build commands](https://github.com/MaxHill/vue-starter/tree/master/docs/commands.md).
