"use strict";
// const goods = [
//   { title: "Shirt", price: 150 },
//   { title: "Socks", price: 50 },
//   { title: "Jacket", price: 350 },
//   { title: "Shoes", price: 250 }
// ];

// const $goodsList = document.querySelector(".goods-list");
// const renderGoodsItem = ({ title, price }) => {
//   return `<div class="goods-item"><h3>${title}</h3><p>${price}$</p></div>`;
// };

// const renderGoodsList = (list = goods) => {
//   let goodsList = list.map((item) => renderGoodsItem(item)).join("");

//   $goodsList.insertAdjacentHTML("beforeend", goodsList);
// };

// renderGoodsList();

class GoodsItem {
  constructor(title, price, id, img) {
    this.title = title;
    this.price = price;
    this.id = id;
    this.img = img;
  }
  renderGoods() {
    return `<div class="goods-item"><img class="item-photo" src=${this.img}><h3>${this.title}</h3><p>${this.price}$</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: "Shirt", price: 150, img: "img/shirt.jpg" },
      { title: "Socks", price: 50, img: "img/socks.jpg" },
      { title: "Jacket", price: 350, img: "img/jacket.jpg" },
      { title: "Shoes", price: 250, img: "img/shoes.jpg" }
    ];
  }
  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price, good.id, good.img);
      listHtml += goodItem.renderGoods();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
  fullPrice() {
    let sumPrice = document.getElementById("fullprice");
    let price = 0;
    this.goods.forEach((good) => {
      price += good.price;
    });
    sumPrice.innerText = `FullPrice = ${price}$`;
  }
}

// Класс для корзины с методами добавления и удаления элементов
class Cart {
  constructor() {}
  addProd() {} // метод добавления элемента в корзину
  removeProd() {} // метод удаления элемента из корзины
  fullCartPrice() {} // метод подсчёта полной стоимости элементов корзины
  checkout() {} // метод для оформления заказа
  render() {} // метод рендера содержимого корзины
}

// Класс для элемента корзины
class CartItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {}
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.fullPrice();

function cartOpen() {
  let cartBody = document.querySelector(".cart");
  cartBody.classList.toggle("displayNone");
}
