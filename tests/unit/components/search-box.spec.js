import { mount } from '@vue/test-utils';
import SearchBox from '../../../src/components/SearchBox.vue';

test('SearchBox', () => {
  const wrapper = mount(SearchBox);

  expect(wrapper.html()).toContain('input');
  expect(wrapper.html()).toContain('a');
});
