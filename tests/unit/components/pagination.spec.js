import { mount } from '@vue/test-utils';
import Pagination from '../../../src/components/Pagination.vue';
import { nextTick } from 'vue';

describe('Pagination', () => {
  it('render 1', async () => {
    const wrapper = mount(Pagination, {
      props: {
        maxPageNumber: 3,
        currentPage: 1,
      },
    });

    expect(wrapper.html()).toBe(
      '<div class="pagination"><a>&lt;</a><a>&gt;</a></div>'
    );

    await nextTick();

    expect(wrapper.html()).toContain('1');
    expect(wrapper.html()).toContain('2');
    expect(wrapper.html()).toContain('3');
    expect(wrapper.html()).not.toContain('...');
  });

  it('render 2', async () => {
    const wrapper = mount(Pagination, {
      props: {
        maxPageNumber: 20,
        currentPage: 7,
      },
    });

    await nextTick();

    expect(wrapper.html()).toContain('1');
    expect(wrapper.html()).toContain('2');
    expect(wrapper.html()).not.toContain('3');
    expect(wrapper.html()).toContain('...');
    expect(wrapper.html()).toContain('8');
    expect(wrapper.html()).toContain('19');
    expect(wrapper.html()).toContain('20');
  });
});
