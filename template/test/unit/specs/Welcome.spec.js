import Vue from 'vue';
import Welcome from 'src/components/Welcome';

describe('Welcome component', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            template: '<div><welcome></welcome></div>',
            components: {Welcome}
        }).$mount();

        expect(vm.$el.querySelector('.Hero__title').textContent)
        .to
        .contain('Welcome to vue-starter');
    });
});
