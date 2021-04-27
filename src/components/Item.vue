<template>
  <div class="item">
    <img src="../assets/logo.png" alt="abc" />
    <span>Acer</span>
    <span class="price">$10.00</span>
  </div>
</template>

<script>
export default {
  name: 'Item',
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
  min-width: 100%;
  height: auto;
  flex-shrink: 0;
}

.price {
  color: red;
}
</style>
