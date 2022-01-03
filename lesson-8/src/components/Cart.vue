<template>
  <div class="cart displayWhite" v-if="isVisibleCart">
    <CartItem v-for="good of cart" v-bind:key="good.id_product" v-bind:good="good"></CartItem>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      isVisibleCart: true,
    };
  },
  computed: {
    cart() {
      console.log(this.$store.getters.cart);
      return this.$store.getters.cart;
    },
  },
  methods: {
    onRemove(good) {
      this.$emit("remove", good);
    },
  },
};
</script>

<style lang="scss" scoped></style>
