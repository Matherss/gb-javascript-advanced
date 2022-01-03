<template>
  <div class="goods-item">
    <h3>{{ title }}</h3>
    <p>{{ price }}</p>
    <button v-bind:product_name="title" v-on:click="onClick">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  name: "GoodCart",
  props: {
    title: String,
    price: Number,
  },
  methods: {
    onClick() {
      this.$emit("add");
    },
  },
};
</script>
