#Investment
##A vue startup project.

##Installation:
$ git clone https://github.com/MaxHill/investment.git

$ cd investment

$ npm install

##Actions
`$ gulp #Runs the dev environment of the application

`$ npm test` #Runs the unit tests once (this is done automatically when running gulp)

##Generators
It's recomended to create aliases to be able to quickly run these generators.
Ex.
```
#Mdb - generators
alias g:p="npm run-script generate:page"
alias g:c="npm run-script generate:component"
alias g:m="npm run-script generate:mixin"
```
###Page
`$ npm run-script generate:page --name="about"` /
`$ g:p --name="about"`
This wil create both a template file and a page component file.
Dont forget to add the page component file to rhe router in `app/js/app.js`
###Component
`$ npm run-script generate:component --name="navigation"` /
`$ g:c --name="navigation"`
This wil create both a template file and a component file.
###Mixing
`$ npm run-script generate:mixin --name="canAuthenticate"` /
`$ g:m --name="canAuthenticate"`
This will create a mixin file.


