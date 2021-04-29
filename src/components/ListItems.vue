<template>
  <div class="list-items">
    <item v-for="item in items" :key="item.id" :data="item" />
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'ListItems',
  components: { Item },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-items {
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;
}

@media only screen and (max-width: 992px) {
  .list-items {
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-template-rows: auto;
  }
}

@media only screen and (max-width: 600px) {
  .list-items {
    grid-template-columns: 1fr;
  }
}
</style>
