<template>
  <div class="pagination">
    <a @click="setCurrentPage(currentPage - 1)">&lt;</a>
    <a
      v-for="i in pagination"
      :key="i"
      :class="{ current: i === currentPage }"
      @click="setCurrentPage(i)"
      >{{ i }}</a
    >
    <a @click="setCurrentPage(currentPage + 1)">&gt;</a>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    maxPageNumber: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
    },
  },
  data: function () {
    return {
      pagination: [],
    };
  },
  emits: ['update:currentPage'],
  methods: {
    update: function () {
      // shortening is not needed
      if (this.maxPageNumber < 8) {
        const newPagination = [];

        for (let i = 1; i <= this.maxPageNumber; i++) {
          newPagination.push(i);
        }

        this.pagination = newPagination;

        return;
      }

      const newPagination = [];

      // head and tail
      newPagination.push(1, 2, this.maxPageNumber - 1, this.maxPageNumber);

      // add current page
      for (let i = 1; i >= -1; i--) {
        const page = this.currentPage + i;
        if (
          !newPagination.includes(page) &&
          page > 0 &&
          page <= this.maxPageNumber
        ) {
          newPagination.splice(2, 0, page);
        }
      }

      // current page is not at head or tail
      if (this.currentPage >= 5) {
        newPagination.splice(2, 0, '...');
      }

      if (this.currentPage <= this.maxPageNumber - 4) {
        newPagination.splice(-2, 0, '...');
      }

      this.pagination = newPagination;
    },
    setCurrentPage(page) {
      if (!(typeof page === 'number')) {
        return;
      }

      if (page < 1) {
        page = 1;
      }

      if (page > this.maxPageNumber) {
        page = this.maxPageNumber;
      }

      this.$emit('update:currentPage', page);
    },
  },
  created: function () {
    this.update();
  },
  watch: {
    // update twice times after searched
    currentPage: function () {
      this.update();
    },
    maxPageNumber: function () {
      this.update();
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  width: 70%;
  flex-wrap: wrap;
  user-select: none;
}
.pagination a {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}

.pagination a:not(:last-child) {
  margin-right: 1rem;
}

.current {
  color: red !important;
}
</style>
