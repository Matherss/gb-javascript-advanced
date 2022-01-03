<template>
  <div class="cart-item">
    <h2>Товар: {{ good.product_name }}</h2>
    <p>Стоит: {{ good.price }}</p>
    <hr />
    <button
      v-bind:product_name="good.product_name"
      v-bind:id_product="good.id_product"
      v-on:click="onRemove"
    >
      Удалить из корзины
    </button>
  </div>
</template>

<script>
export default {
  props: {
    good: Object,
  },
  methods: {
    onRemove() {
      this.$store.dispatch("removeFromCart", this.good);
    },
  },
};
</script>
