import { mount } from '@vue/test-utils';
import Item from '../../../src/components/Item.vue';

test('Item', () => {
  const wrapper = mount(Item, {
    props: {
      data: {
        imageUrl: '/image.jpg',
        name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        price: 50.5,
      },
    },
  });

  expect(wrapper.html()).toContain('src="/image.jpg"');
  expect(wrapper.html()).toContain('aaaaaaaaaaaaaaaaaaaa...');
  expect(wrapper.html()).toContain('$50.5');
});
