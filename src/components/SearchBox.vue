<template>
  <div class="search-box">
    <input
      type="text"
      placeholder="Search here"
      v-model="input"
      @keyup.enter="setQueryString"
    />
    <a @click="setQueryString">Search</a>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    queryString: String,
  },
  emits: ['update:queryString'],
  data: function () {
    return {
      input: '',
    };
  },
  methods: {
    setQueryString: function () {
      this.$emit('update:queryString', this.input);
    },
  },
};
</script>

<style scoped>
.search-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
}

input {
  border-radius: 50px 0 0 50px;
  padding: 0 0 0 1rem;
  outline: none;
  border: 1px solid gray;
  flex-grow: 1;
  min-width: 0rem;
}

a {
  border: 1px solid gray;
  border-radius: 0 50px 50px 0;
  padding: 0 1rem;
  background-color: darkgrey;
  user-select: none;
  cursor: pointer;
}
</style>
