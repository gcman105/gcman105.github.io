import Buymeacoffee from '@/components/Buymeacoffee.vue'
import { mount } from '@vue/test-utils';

describe('Buymeacoffee', () => {
  it('is a Vue component', () => {
    const wrapper = mount(Buymeacoffee);
    expect(wrapper).toBeTruthy();
  });
});
