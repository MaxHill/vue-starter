import Welcome from 'src/components/Welcome';
import Help from '../helpers';

describe('Welcome component', () => {
    let component;
    let vm;

    beforeEach(() => {
        vm = Help.bootstrapComponent(Welcome);
        component = vm.$refs.testComponent;
    });

    it('should render correct contents', () => {
        expect(vm.$el.querySelector('.Welcome__title').textContent)
            .to
            .contain('Build something awesome!');
    });

    it('should have an attribute for the title message', () => {
        expect(component.msg)
            .to
            .equal('Build something awesome!');
    });
});
