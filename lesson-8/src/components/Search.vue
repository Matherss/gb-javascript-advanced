<template>
  <div class="search">
    <input type="text" v-model="searchString" class="goods-search" />
    <button class="search-button" type="button" v-on:click="onClick">Искать</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchString: "",
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("search", this.searchString);
    },
  },
};
</script>
