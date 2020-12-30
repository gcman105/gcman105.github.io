import Header from '@/components/Header.vue'
import { mount } from '@vue/test-utils';

describe('Header', () => {
  it('is a Vue component', () => {
    const wrapper = mount(Header);
    expect(wrapper).toBeTruthy();
  });
});
