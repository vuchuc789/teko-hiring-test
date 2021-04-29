import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import Logo from '../../src/components/Logo.vue';
import StoreName from '../../src/components/StoreName.vue';
import SearchBox from '../../src/components/SearchBox.vue';
import ListItems from '../../src/components/ListItems.vue';
import Pagination from '../../src/components/Pagination.vue';
import Item from '../../src/components/Item.vue';

require('jest-fetch-mock').enableFetchMocks();

test('App', () => {
  const wrapper = mount(App);

  expect(wrapper.findComponent(Logo).exists()).toBe(true);
  expect(wrapper.findComponent(StoreName).exists()).toBe(true);
  expect(wrapper.findComponent(SearchBox).exists()).toBe(true);
  expect(wrapper.findComponent(ListItems).exists()).toBe(true);
  expect(wrapper.findComponent(Pagination).exists()).toBe(true);
  expect(wrapper.findComponent(Item).exists()).toBe(false);
});
