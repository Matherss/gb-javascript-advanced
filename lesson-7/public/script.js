"use strict";

const API_URL = "http://127.0.0.1:3000/";
Vue.component("goods-item", {
  props: ["good"],
  template: `
    <div class="goods-item">
      <h3>{{ good.product_name }}</h3>
      <p>{{ good.price }}</p>
      <button v-on:click="addToCart">Добавить в корзину</button>
    </div>
  `,
  methods: {
    addToCart() {
      fetch(API_URL + "addToCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON"
        },
        body: JSON.stringify({ product_name: this.good.product_name, price: this.good.price })
      }).then(() => {
        this.$root.cart.amount += this.good.price;
        this.$root.cart.countGoods++;
        this.$root.fetchCart();
      });
    }
  }
});
Vue.component("goods-list", {
  props: ["goods", "cart"],
  template: `
    <div class="goods-list">
    <template v-if="goods.length">
      <goods-item v-for="good in goods" :good="good"  v-bind:key="good.id_product" v-bind:product_name="good.product_name"></goods-item>
      </template>
      <template v-else>
      <h2>Нет данных!!!</h2>
      </template>
    </div>
  `
});

Vue.component("search", {
  template: `<div class="search">
    <input type="text" v-model="searchString" class="goods-search" />
    <button class="search-button" type="button" v-on:click="onClick">Искать</button>
  </div>`,
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    onClick() {
      this.$emit("search", this.searchString);
    }
  }
});

Vue.component("cart-item", {
  template: `<div class="cart-item"><h2>Товар: {{ cartgood.product_name }}</h2><p>Стоит: {{ cartgood.price }}</p><hr><button v-bind:id_product="cartgood.id_product" v-on:click="removeFromCart">Удалить из корзины</button></div>`,
  props: ["cartgood"],
  methods: {
    removeFromCart(event) {
      fetch(API_URL + "deleteFromCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON"
        },
        body: JSON.stringify({
          product_name: this.cartgood.product_name,
          price: this.cartgood.price,
          id_product: this.cartgood.id_product
        })
      })
        .then(() => {
          // const index = this.$root.cart.contents.findIndex((item) => item.id_product == this.cartgood.id);
          // this.$root.cart.contents.splice(index, 1);
          this.$root.cart.amount -= this.cartgood.price;
          this.$root.cart.countGoods--;
          this.$root.fetchCart();
          console.log(111);
        })
        .catch((error) => console.log(error));
    }
  }
});

Vue.component("cart", {
  template: `<div class="cart displayWhite" v-if="visible"><cart-item v-for="product of cart.contents"  
  :key="product.id_product"
  v-bind:id_product="product.id_product"
  :cartgood="product"></cart-item></div>`,
  props: ["cart", "visible"]
});

Vue.component("error", {
  template: `<h1 style="color:red">Ошибка: <p style="font-size: 18px;color:maroon;font-style: italic;"> {{ err_text }}</p></h1>`,
  props: ["err_text"]
});

var vu = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    isVisibleCart: true,
    noerror: 1,
    err_text: "",
    cart: {
      countGoods: 0,
      amount: 0,
      contents: []
    }
  },
  methods: {
    fetchGoods() {
      fetch(`${API_URL}catalogData`)
        .then((request) => request.json())
        .then((data) => {
          this.goods = data;
          this.filteredGoods = data;
        })
        .catch((err) => {
          this.noerror = 0;
          this.err_text = err;
          console.error(err);
        });
    },

    onSearch(searchString) {
      const regex = new RegExp(searchString, "i");
      this.filteredGoods = this.goods.filter((good) => regex.test(good.product_name));
    },

    fetchCart() {
      fetch(`${API_URL}getBasket`)
        .then((request) => request.json())
        .then((data) => {
          this.cart.contents = data;
        })
        .catch((err) => {
          this.noerror = 0;
          this.err_text = err;
          console.error(err);
        });
    },

    toggleCart() {
      this.isVisibleCart = !this.isVisibleCart;
    }
  },
  mounted() {
    this.fetchGoods();
    this.fetchCart();
  }
});
