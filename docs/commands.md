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


# Build Commands

All build commands are executed via [NPM Scripts](https://docs.npmjs.com/misc/scripts).

### `npm run dev`

> Runs `npm run webpack`& `npm run icons:watch` in paralell. See [Webpack command](#npm-run-webpack) & [Icons command](#npm-run-icons) for more details.

### `npm run webpack`

> Starts a Node.js local development server. See [API Proxying During Development](https://github.com/MaxHill/vue-starter/tree/master/docs/proxy.md) for more details.

- Webpack + `vue-loader` for single file Vue components.
- State preserving hot-reload
- State preserving compilation error overlay
- Lint-on-save with ESLint
- Source maps

### `npm run icons`

> Minifies and sprites svg files in `src/assets/images/icons`. You may use the commnd `npm run icons:watch` to watch the directory for changes and re run the script on change.

- Combines svg files in `src/assets/images/icons`
- Minifes combined svg
- Outputs `src/assets/images/icons.svg`

### `npm run build`

> Build assets for production. See [Integrating with Backend Framework](https://github.com/MaxHill/vue-starter/tree/master/docs/backend.md) for more details.

- JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
- HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
- CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
- All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
- Also see [deployment notes](#how-do-i-deploy-built-assets-with-my-backend-framework).

### `npm run unit`

> Run unit tests in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html). See [Unit Testing](unit.md) for more details.

- Supports ES2015 in test files.
- Supports all webpack loaders.
- Easy [mock injection](http://vuejs.github.io/vue-loader/workflow/testing-with-mocks.html).

### `npm run e2e`

> Run end-to-end tests with [Nightwatch](http://nightwatchjs.org/). See [End-to-end Testing](e2e.md) for more details.

- Run tests in multiple browsers in parallel.
- Works with one command out of the box:
  - Selenium and chromedriver dependencies automatically handled.
  - Automatically spawns the Selenium server.

### `npm run generate:view`

> Generate a new view boilerplate file. You will still need to register the view in the `src/routes.js`.

- File boilerplate added by default.
- File not created if already exists.

### `npm run generate:component`

> Generate a new component boilerplate file. You can see example of how to use a component in a view if you look in `src/views/Home.vue`

- File boilerplate added by default.
- File not created if already exists.


### `npm run generate:test`

> Generate a new test file hooked up with the test helper and component you want to test.

- Test boilerplate added by default.
- Test not created if already exists.
