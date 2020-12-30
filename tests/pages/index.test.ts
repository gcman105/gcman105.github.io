import index from '@/pages/index.vue'
import { mount } from '@vue/test-utils';

describe('index', () => {
  it('is a Vue component', () => {
    const wrapper = mount(index);

    // Check that the main section exists
    expect(wrapper.find('main').exists()).toBeTruthy();


  });
});
