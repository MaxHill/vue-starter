import Welcome from 'src/components/Welcome'{{#if_eq lintConfig "google"}};{{/if_eq}}
import Help from '../helpers'{{#if_eq lintConfig "google"}};{{/if_eq}}

describe('Welcome component', () => {
    let component{{#if_eq lintConfig "google"}};{{/if_eq}}

    beforeEach(() => {
        component = Help.bootstrapComponent(Welcome){{#if_eq lintConfig "google"}};{{/if_eq}}
    }){{#if_eq lintConfig "google"}};{{/if_eq}}

    it('should render correct contents', () => {
        expect(component.$el.querySelector('.Welcome__title').textContent)
            .to
            .contain('Build something awesome!'){{#if_eq lintConfig "google"}};{{/if_eq}}
    }){{#if_eq lintConfig "google"}};{{/if_eq}}

    it('should have an attribute for the title message', () => {
        expect(component.msg)
            .to
            .equal('Build something awesome!'){{#if_eq lintConfig "google"}};{{/if_eq}}
    }){{#if_eq lintConfig "google"}};{{/if_eq}}
}){{#if_eq lintConfig "google"}};{{/if_eq}}
