//File.create(test, testContent);
var Generate = require('./support/Generate');

// Create Template
var test = new Generate('test/unit/specs', 'spec.js');

test.setContent(`import ${test.capitalize(test.name)} from 'src/components/${test.capitalize(test.name)}';
import Help from '../helpers';

describe('${test.capitalize(test.name)} component', () => {
    let component;
    let vm;

    beforeEach(() => {
        vm = Help.bootstrapComponent(${test.capitalize(test.name)});
        component = vm.$refs.testComponent;
    });

    it('should ', () => {
        // test
    });
});
`);

test.create();
