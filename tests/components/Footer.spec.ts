import Footer from '@/components/Footer.vue'
import { mount } from '@vue/test-utils';

describe('Footer', () => {
  it('is a Vue component', () => {
    const wrapper = mount(Footer);
    expect(wrapper).toBeTruthy();
  });
});
