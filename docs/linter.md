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


# Linter Configuration

This boilerplate uses [ESLint](http://eslint.org/) as the linter, and uses the [Standard](https://github.com/feross/standard/blob/master/RULES.md) preset with some small customizations.

If you are not happy with the default linting rules, you have several options:

1. Overwrite individual rules in `.eslintrc.js`. For example, you can add the following rule to enforce semicolons instead of omitting them:

  ``` js
  "semi": [2, "always"]
  ```

2. Pick a different ESLint preset when generating the project, for example [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

3. Pick "none" for ESLint preset when generating the project and define your own rules. See [ESLint documentation](http://eslint.org/docs/rules/) for more details.
