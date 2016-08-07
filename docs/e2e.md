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


# End-to-end Testing

This boilerplate uses [Nightwatch.js](http://nightwatchjs.org) for e2e tests. Nightwatch.js is a highly integrated e2e test runner built on top of Selenium. This boilerplate comes with Selenium server and chromedriver binaries pre-configured for you, so you don't have to mess with these yourself.

Let's take a look at the files in the `test/e2e` directory:

- `runner.js`

  A Node.js script that starts the dev server, and then launches Nightwatch to run tests against it. This is the script that will run when you run `npm run e2e`.

- `nightwatch.conf.js`

  Nightwatch configuration file. See [Nightwatch's docs on configuration](http://nightwatchjs.org/guide#settings-file) for more details.

- `custom-assertions/`

  Custom assertions that can be used in Nightwatch tests. See [Nightwatch's docs on writing custom assertions](http://nightwatchjs.org/guide#writing-custom-assertions) for more details.

- `specs/`

  You actual tests! See [Nightwatch's docs on writing tests](http://nightwatchjs.org/guide#writing-tests) and [API reference](http://nightwatchjs.org/api) for more details.

### Running Tests in More Browsers

To configure which browsers to run the tests in, add an entry under "test_settings" in [`test/e2e/nightwatch.conf.js`](https://github.com/vuejs-templates/webpack/blob/master/template/test/e2e/nightwatch.conf.js#L17-L39) , and also the `--env` flag in [`test/e2e/runner.js`](https://github.com/vuejs-templates/webpack/blob/master/template/test/e2e/runner.js#L15). If you wish to configure remote testing on services like SauceLabs, you can either make the Nightwatch config conditional based on environment variables, or use a separate config file altogether. Consult [Nightwatch's docs on Selenium](http://nightwatchjs.org/guide#selenium-settings) for more details.
