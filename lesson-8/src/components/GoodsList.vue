<template>
  <div class="goods-list">
    <GoodCart 
      v-for="good of list" 
      v-bind:key="good.id_product"
      v-bind:title="good.product_name"
      v-bind:price="good.price"
      v-on:add="onAdd(good)"
    ></GoodCart>
  </div>
</template>

<script>
import GoodCart from './GoodCart.vue'

export default {
  components: {
    GoodCart
  },
  computed: {
    list() {
      return this.$store.getters.goods
    }
  },
  methods: {
    onAdd(good) {
      this.$store.dispatch('addToCart', good)
    }
  }
}
</script>