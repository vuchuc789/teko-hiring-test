<template>
  <div class="pagination">
    <a>&lt;</a>
    <a>1</a>
    <a>2</a>
    <a>3</a>
    <a>4</a>
    <a>5</a>
    <a>6</a>
    <a>&gt;</a>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  width: 70%;
  flex-wrap: wrap;
}
.pagination a {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}

.pagination a:not(:last-child) {
  margin-right: 1rem;
}
</style>
