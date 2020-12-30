import Logo from '@/components/Logo.vue'
import { mount } from '@vue/test-utils';

describe('Logo', () => {
  it('is a Vue component', () => {
    const wrapper = mount(Logo);
    expect(wrapper).toBeTruthy();
  });
});
