#Investment
##A vue startup project.

##Installation:
$ git clone https://github.com/MaxHill/investment.git

$ cd investment

$ npm install

##Actions
$ gulp #Runs the dev environment of the application

$ npm test #Runs the unit tests once (this is done automatically when running gulp)

##Develop
###Create a new page
You will need 2 new files in the directory:
`app/js/views/`

**First, create a javascript file with the name of the page. ex.**

`about.js`

**Next, create a new template file (html) which looks as follows.**

`about.template.html`

Example terminal workflow:
```
$ cd project
$ touch app/js/views/about.js && touch app/js/views/about.template.html
```

You will now have:
`app/js/views/about.js` & 
`app/js/views/about.template.html`

**The next step is to add the code to these files to make them components:**

about.js:
```
/**
 * The about view.
 * @type {Object}
 */
module.exports = {
    template: require('./about.template.html'),
    components: {
        // Require components here
    },
};
```
about.template.js
```
<div>
  <h1>About Me</h1>
</div>
```
**The final step is to add the component to the router (`app/js/app.js`):**

```
Router.map({
    '/about': {
        component: require('./views/about')
    }
});
```



