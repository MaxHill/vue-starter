#Investment time
An opinionated **Vue** project setup with **karma** / **jasmine** tests. **Es6** transpilation with **babel**. And some **browserify** magic to tie it all together.

## Table of contents

* [Installation](#installation)
* [Actions](#actions)
* [Generators](#generators)
* [Testing](#testing)
* [What goes where?](#what-goes-where)

##Installation:

~~~bash
$ git clone https://github.com/MaxHill/investment.git
$ cd investment
$ npm install
$ gulp
~~~

##Actions
`$ npm start` / `$ gulp` Run this when you want to develop. Starts the *dev server*, *watchers* and *transpilers* etc.

`$ npm test` Runs the unit tests once (this is done automatically when running gulp)

##Generators
Generators are scripts that generate file-stubs. Generators never add to, or override existing files! You therefore need to require the files where you want to use them. So if you generated a page, you will then need to add it to the router (`app/js/app.js`) manually.

**Tip:** Create aliases to be able to quickly run these generators. Add the below to `~/.baschrc`.

~~~bash
#Mdb - generators
alias g:p="npm run-script generate:page"
alias g:c="npm run-script generate:component"
alias g:m="npm run-script generate:mixin"
alias g:t="npm run-script generate:test"
~~~

###Page

`$ g:p --name="about"` or

`$ npm run-script generate:page --name="about"`

This wil create both a template file and a page component file.
Dont forget to add the page component file to the router in `app/js/app.js`

###Component
`$ g:c --name="navigation"` or

`$ npm run-script generate:component --name="navigation"`

This wil create both a template file and a component file.

###Mixins
`$ g:m --name="canAuthenticate"` or

`$ npm run-script generate:mixin --name="canAuthenticate"`

This will create a mixin file.

###Tests
`$ g:t --name="navigation"` or

`$ npm run-script generate:test --name="navigation"`

This will create a test stub. With the option component the test-stub will bootstrap that component. With the name option it will not.
##Testing
The project is setup with the **jasmine** and the **karma** for testing.
You can find an example test in the `/test` folder.

You can generate a new test stub with the [generate:test command](#tests) or manually create the new test file.
For your conveniance there is a `test-helper.js` file with a method for botstrapping a component with an empty vue instance.
You can of course add your own testing methods to this file.

## What goes where?

* app
  * [js](#js)
    * [components](#components)
    * [mixins](#mixins)
    * [views](#views)
    * [app.js](#appjs)
    * [router.js](#routerjs)
* [commands](#commands)
* [public](#public)
* [test](#test)

#### Js
This is where you write all your js code.

#### Components
Components are reusable parts of pages, like navigation,footer or maby a button.
You may use components in pages as well as in other components.

#### Mixins
Some components will share some functionality. If thats the case extracting a mixin might be helpfull.
Think of this lika a php trait if you want.

#### Views
These are the different views or "pages" of your application. It can for example be the /about page.

#### App.js
This is your main javascript file where everything is bootstrapped. Here you instanciate plugins, set application wide preferences and specify your routes. Think of this as your index.php if you want.

#### Router.js
This is just a simple javascript object where you specify your routes. Nothing more. Nothing less.

#### Commands
You probably don't need to worry about this folder. This is where your commandline commands live. For example the generators.

#### Public
This is the application that is build by the gulp file. This is all the browser knows about.

#### Test
This is the most sacred place in your application. Here you'll write all of your tests. Because you do write tests, right? ;)

