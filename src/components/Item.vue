<template>
  <div class="item">
    <img
      :src="data?.imageUrl"
      @error="$event.target.src = '/default-item.jpg'"
    />
    <span class="name">{{ slicedName || 'Noname' }}</span>
    <span class="price">${{ data.price || 0 }}</span>
  </div>
</template>

<script>
const maxNameLength = 20;

export default {
  name: 'Item',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    slicedName: function () {
      if (this.data.name && this.data.name.length > maxNameLength) {
        return `${this.data.name.slice(0, maxNameLength)}...`;
      }

      return this.data.name;
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 15rem;
  overflow: hidden;
  white-space: nowrap;
}

img {
  width: 12rem;
  height: 12rem;
  object-fit: contain;
}

.price {
  color: red;
}
</style>
