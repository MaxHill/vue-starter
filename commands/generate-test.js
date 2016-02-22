var File = require('./support/File');
var clc = require('cli-color');
var dir = '../test/';
// jscs:disable
var name = process.env.npm_config_component;
var fileName = process.env.npm_config_component;
var component = true;
if (!name) {
    name = process.env.npm_config_name;
    component = false;
}
// jscs:enable

if ((!name || 0 === name.length)) {
    console.log(clc.red('You must specify a component or name'));
    return;
}

// Capitalize string
function capitalize(string){
    return string.toLowerCase().replace( /\b\w/g, function (m) {
        return m.toUpperCase();
    });
};

var test = dir + name + '-test.js';
var file = ((fileName) ? `var ${capitalize(name)} = Help.bootstrapComponent(require('../app/js/components/${fileName}.js'));
` : '');
var testContent = `var Help = require('./test-helper.js');
${file}
describe('${capitalize(name)}', () => {
    it('should exist', () => {
        expect(typeof ${capitalize(name)}).toBe('object');
    });

    // Add more tests here.
});
`;


if (component) {
    return File.exists(`${__dirname}../app/js/components/${fileName}.js`,function(){
        console.log(clc.red(`The component [${fileName}] does not exist!`));
    }, '');
}

//File.create(test, testContent);
