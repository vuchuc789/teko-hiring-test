import { mount } from '@vue/test-utils';
import ListItems from '../../../src/components/ListItems.vue';

test('ListItem', () => {
  const wrapper = mount(ListItems, {
    props: {
      items: [
        {
          id: 1,
          imageUrl: '/image.jpg',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          price: 50.5,
        },
      ],
    },
  });

  expect(wrapper.html()).toContain('src="/image.jpg"');
  expect(wrapper.html()).toContain('aaaaaaaaaaaaaaaaaaaa...');
  expect(wrapper.html()).toContain('$50.5');
});
