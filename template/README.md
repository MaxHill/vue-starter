#{{ name }}
> {{ description }}
## Table of contents

* [Installation](#installation)
* [Actions](#actions)
* [Generators](#generators)
* [Testing](#testing)
* [What goes where?](#what-goes-where)

##Installation:

``` bash
#Install your project
$ cd my-project
$ git init	#needed for pre-commit hook
$ npm install

#Run your project
$ npm start
# or
$ gulp 
```

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

~~~bash
$ g:p --name="about"` 
# or
$ npm run-script generate:page --name="about"
~~

This wil create both a template file and a page component file.
Dont forget to add the page component file to the router in `app/js/app.js`

###Component
~~~bash
$ g:c --name="navigation"` 
# or
$ npm run-script generate:component --name="navigation"
~~~

This wil create both a template file and a component file.

###Mixin
~~~bash
$ g:m --name="canAuthenticate"` 
# or
$ npm run-script generate:mixin --name="canAuthenticate"
~~~

This will create a mixin file.

###Test
~~~bash
$ g:t --name="navigation"
# or
$ npm run-script generate:test --name="navigation"
~~~

This will create a test stub.
##Testing
The project is setup with the **jasmine** and the **karma** for testing.
You can find an example test in the `/test` folder.

You can generate a new test stub with the [generate:test command](#tests) or manually create the new test file.
For your conveniance there is a `test-helper.js` file with a method for botstrapping a component with an empty vue instance.
You can of course add your own testing methods to this file.


###Testing components / mixins
To test components and mixins we need to instanciate them witha a vue instance. Fortunatly we get some help with that. This project includes the helper functions "bootstrapComponent" & "bootstrapMixin". These functions can be called before each assertion. 

####Here follows an example of how you might test an example component.
Explination below.

Generate the component and test:

~~~bash
$ g:c --name="greeting"
$ g:t --name="greeting"
# or
$ npm run generate:test --name="greeting"
$ npm run generate:test --name="greeting"
~~~

And write the following in the generated files.

~~~js
//app/js/components/greeting.js

module.exports = {
	template: require('./greeting.template.html'),
	data: {
		return {
			names:['John Doe']
		}
	},
	methods() {
		addName(name) {
			this.names.push(name)
		}
	}
}
~~~

~~~html
<!-- app/js/components/greeting.template.html -->

<div>
	<ul>
		<li v-for="name in names">Hello {{ name }}!</li>
	</ul>
	<button @click="addName('world')">Say hello to the world</button>
</div>
~~~

~~~js
//app/test/greeting.test.js

var Help = require('./test-helper.js');

describe('Greeting component', () => {

    var component;
    beforeEach(() => {
        component = Help.bootstrapComponent(require('../app/js/components/greeting'));
    });
    
	/*
	* Assert the component exists and is object.
	*/
    it('should exist', () => {
        expect(typeof component).toBe('object');
    });
	
	/*
	* Assert that some data is set correctly on the component.
	*/
    it('should initialy have the names attribute set correctly', () => {
        expect(component.names).toBe(['John Doe']);
    });

	/*
	* Assert you can call a method to add a name to the name list.
	*/
    it('should be able to add a name to the name list', () => {
        expect(component.names).toBe(['John Doe']);
        component.addName('Test Person');
        expect(component.name).toBe(['John Doe', 'Test Person']);
    });

});
~~~

Make sure it all works by running `$ npm test`.

####Woa! What is happening here? Let's dig in!

Well, first we define our basic greeting component that will display an unordered list of greetings. The next thing we do is define the template for said component. Notice the button for adding world to the list of names we want to greet.

Now to the actual test. The first thing we do is include the test-helper file. This is the file that holds our bootstrap methods we talked about earlier. After that we start the test by saying we want to describe the "Greeting component". The "beforeEach" method will be called before each assertion (`it('should...`). Here we use our helper method to bootstrap our component. This is so we in each assertion will have a fresh copy of our component.

We begin with testing that the component exist by making sure the type is object. We proceed with making sure the component has the correct default data. Finally we make sure we can add a name to the list of names.

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
This is your main javascript file where everything is required and setup. We register our root vue instance and router. Finally we boot the application.

#### vue-register.js
This is where your root vue instance is setup. This is where plugins are setup. Why we do this in a separate file is because we want to be able to use this file in our tests aswell.

#### Routes.js
This is just a simple javascript object where you specify your routes. Nothing more. Nothing less.

#### Commands
You probably don't need to worry about this folder. This is where your commandline commands live. For example the generators.

#### Public
This is the application that is build by the gulp file. This is all the browser knows about.

#### Test
This is the most sacred place in your application. Here you'll write all of your tests. Because you do write tests, right? ;)

