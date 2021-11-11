<template>
  <div class="page">
    <header>
      <div class="container">
        <Search></Search>
        <button class="cart-button" type="button" v-on:click="onToggleCart">Корзина</button>
      </div>
    </header>

    <Cart
      v-bind:isVisibleCart="isVisibleCart"
      v-on:close="onToggleCart"
      v-if="isVisibleCart"
    ></Cart>
    <main>
      <GoodsList></GoodsList>
    </main>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import GoodsList from "../components/GoodsList.vue";
import Cart from "../components/Cart.vue";

export default {
  components: {
    Search,
    GoodsList,
    Cart,
  },
  data() {
    return {
      isVisibleCart: true,
    };
  },
  methods: {
    onToggleCart() {
      this.isVisibleCart = !this.isVisibleCart;
    },
  },
  mounted() {
    this.$store.dispatch("loadGoods"), this.$store.dispatch("loadCart");
  },
};
</script>
