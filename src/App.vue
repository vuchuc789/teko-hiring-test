<template>
  <div class="nav">
    <logo class="logo" />
    <store-name class="store-name" />
  </div>
  <div class="main">
    <search-box class="search-box" />
    <list-items class="list-items" />
    <pagination class="pagination" />
  </div>
</template>

<script>
import Logo from './components/Logo.vue';
import StoreName from './components/StoreName.vue';
import SearchBox from './components/SearchBox';
import ListItems from './components/ListItems.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: { Logo, StoreName, SearchBox, ListItems, Pagination },
};
</script>

<style>
@font-face {
  font-family: Montserrat;
  src: url('./assets/Montserrat.ttf');
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  font-size: 100%;
}

input {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  font-size: 100%;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: aquamarine;
}

.logo {
  position: relative;
  top: 2rem;
  height: 4rem;
  width: auto;
  margin: 0 1.5rem 0 2.5rem;
  padding: 0.5rem;
  background-color: black;
  border: 2px solid #ff463f;
}

.store-name {
  height: 2rem;
  width: auto;
}

.main {
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.search-box {
  margin-top: 5rem;
  width: 60%;
}

.list-items {
  margin-top: 5rem;
}

.pagination {
  margin: 3rem 0;
}

@media only screen and (max-width: 600px) {
  .nav {
    justify-content: center;
  }

  .logo {
    display: none;
  }

  .store-name {
    margin: 1rem 0.5rem;
  }

  .search-box {
    margin-top: 2rem;
  }

  .list-items {
    margin-top: 2rem;
  }
}
</style>
