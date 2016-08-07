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


# Prerendering for SEO

If you want to prerender routes that will not significantly change once pushed to production, use this Webpack plugin: [prerender-spa-plugin](https://www.npmjs.com/package/prerender-spa-plugin), which has been tested for use with Vue. For pages that _do_ frequently change, [Prerender.io](https://prerender.io/) and [Netlify](https://www.netlify.com/pricing) both offer plans for regularly re-prerendering your content for search engines.
