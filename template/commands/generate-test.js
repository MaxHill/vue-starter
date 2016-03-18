//File.create(test, testContent);
var Generate = require('./support/Generate');

// Create Template
var test = new Generate('test', 'test.js');

test.setContent(`var Help = require('./test-helper.js');

describe('${test.capitalize(test.name)}', () => {

    var ${test.capitalize(test.name)};
    beforeEach(() => {
        ${test.capitalize(test.name)} = Help.bootstrapComponent(
            require('../app/js/components/${test.name}.js')
        );
    });

    it('should exist', () => {
        expect(typeof ${test.capitalize(test.name)}).toBe('object');
    });

    // Add more tests here.
});
`);

test.create();
