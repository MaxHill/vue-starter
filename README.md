#Investment
##A vue startup project.

##Installation:
$ git clone https://github.com/MaxHill/investment.git

$ cd investment

$ npm install

##Actions
`$ gulp` Runs the dev environment of the application

`$ npm test` Runs the unit tests once (this is done automatically when running gulp)

##Generators
**Tip:** Create aliases to be able to quickly run these generators.

Ex:
```
#Mdb - generators
alias g:p="npm run-script generate:page"
alias g:c="npm run-script generate:component"
alias g:m="npm run-script generate:mixin"
```
###Page
`$ g:p --name="about"` or

`$ npm run-script generate:page --name="about"`

This wil create both a template file and a page component file.
Dont forget to add the page component file to the router in `app/js/app.js`

###Component
`$ g:c --name="navigation"` or

`$ npm run-script generate:component --name="navigation"`

This wil create both a template file and a component file.

###Mixing
`$ g:m --name="canAuthenticate"` or

`$ npm run-script generate:mixin --name="canAuthenticate"`

This will create a mixin file.

## What goes where?

* app
  * [js](#js)
    * [components](#components)
    * [mixins](#mixins)
    * [views](#views)
    * [app.js](#appjs)
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

#### Commands
You probably don't need to worry about this folder. This is where your commandline commands live. For example the generators.

#### Public
This is the application that is build by the gulp file. This is all the browser knows about.

#### Test
This is your most sacred place in your application. Here you find all your tests. Because you do write tests, right?

