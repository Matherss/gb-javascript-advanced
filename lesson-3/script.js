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

const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/";

function send(onError, onSuccess, url, method = "GET", data = null, headers = [], timeout = 60000) {
  let xhr;

  if (window.XMLHttpRequest) {
    // Chrome, Mozilla, Opera, Safari
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // Internet Explorer
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.open(method, url, true);

  headers.forEach((header) => {
    xhr.setRequestHeader(header.key, header.value);
  });

  xhr.timeout = timeout;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 400) {
        onError(xhr.statusText);
      } else {
        onSuccess(xhr.responseText);
      }
    }
  };

  xhr.send(data);
}

class GoodsItem {
  constructor(title, price, dataId) {
    this.title = title;
    this.price = price;
    this.dataId = dataId;
  }
  renderGoods() {
    return `<div class="goods-item" data-id='${this.dataId}'><h3>${this.title}</h3><p>${this.price}$</p><button class='add-btn' data-id='${this.dataId}'>Добавить в корзину</button></div>`;
  }
}

class GoodsList {
  constructor(cart) {
    this.goods = [];
    this._cart = cart;
  }
  // fetchGoods() {
  //   this.goods = [
  //     { title: "Shirt", price: 150, img: "img/shirt.jpg" },
  //     { title: "Socks", price: 50, img: "img/socks.jpg" },
  //     { title: "Jacket", price: 350, img: "img/jacket.jpg" },
  //     { title: "Shoes", price: 250, img: "img/shoes.jpg" }
  //   ];
  // }

  fetchGoods(target) {
    fetch(`${API_URL}catalogData.json`)
      .then((response) => {
        return response.json();
      })
      .then((request) => {
        this.goods = request.map((good) => ({
          title: good.product_name,
          price: good.price,
          dataId: good.id_product
        }));
        this.render(target);
        this.fullPrice();
      })
      .catch((err) => {
        console.log(err.text);
      });
  }

  render(target) {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price, good.dataId);
      listHtml += goodItem.renderGoods();
    });
    target.innerHTML = listHtml;
    const prods = this;
    target.querySelectorAll(".add-btn").forEach((element) => {
      element.addEventListener("click", function addd(event) {
        prods.addProd(event.target.dataset.id);
      });
    });
  }
  addProd(dataId) {
    fetch(`${API_URL}addToBasket.json`)
      .then((response) => {
        return response.json();
      })
      .then((request) => {
        console.log(request);
        if (request.result == 1) {
          this._cart.add(this.goods.find((good) => good.dataId == dataId));
        }
      })
      .catch((error) => {
        console.log("Error:" + error);
      });
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
// new Promise((resolve, reject) => {
//   send(
//     reject,
//     resolve,
//     `${API_URL}catalogData.json`
//   )
// })
// .then((request) => {
//   this.goods = JSON.parse(request).map(good => ({title: good.product_name, price: good.price, dataId: good.id_product}))
//   this.render();
//  this.fullPrice();
// })
// .catch((err) => {
//   console.log(err.text)
// })

// send(
//   (err) => {
//     console.log(err.text)
//   },
//   (request) => {
//     this.goods = JSON.parse(request).map(good => ({title: good.product_name, price: good.price, dataId: good.id_product}))
//     this.render();
//  this.fullPrice();
//   },
//   `${API_URL}catalogData.json`
// )

// Класс для элемента корзины
class CartItem {
  constructor(title, price, dataId, quantity = 1) {
    this.title = title;
    this.price = price;
    this.dataId = dataId;
    this.quantity = quantity;
  }
  renderItem() {
    return `<div class='cart-item' data-id='${this.dataId}'><h2>Товар: ${this.title}</h2><p>Стоит: ${this.price}</p><hr>Идентификатор: ${this.dataId}<hr>Количество: ${this.quantity}<hr><button class="rm-btn" data-id="${this.dataId}">Удалить</button></div>`;
  }
}

// Класс для корзины с методами добавления и удаления элементов
class Cart {
  constructor() {
    this.cost = 0;
    this.countGoods = 0;
    this.cartGoods = [];
  }
  fetchCart(target) {
    fetch(`${API_URL}getBasket.json`)
      .then((response) => {
        return response.json();
      })
      .then((request) => {
        this.cost = request.amount;
        this.countGoods = request.countGoods;
        this.cartGoods = request.contents.map((good) => ({
          title: good.product_name,
          price: good.price,
          dataId: good.id_product,
          quantity: good.quantity
        }));

        this.render(target);
      })
      .catch((err) => {
        console.log("Error:" + err.text);
      });
  }
  // Добавление товара в корзину
  add(good) {
    this.cartGoods.push(good);
    this.countGoods++;
    const lastprice = good.price;
    this.cost = this.cost + lastprice;
    this.render($cart);
  }

  // метод рендера содержимого корзины
  render(target) {
    let cartHtml = "";
    this.cartGoods.forEach((good) => {
      const addProdToCart = new CartItem(good.title, good.price, good.dataId, good.quantity);
      cartHtml += addProdToCart.renderItem();
    });
    document.querySelector("#fullprice-2").innerHTML =
      "В КОРЗИНЕ: Количество товаров: " + this.countGoods + "шт. Стоимость: " + this.cost + "$";
    document.querySelector(".cart").innerHTML = cartHtml;
    const prods = this;
    target.querySelectorAll(".rm-btn").forEach((element) => {
      element.addEventListener("click", function dell(event) {
        prods.removeProd(event.target.dataset.id);
      });
    });
  }

  remove(good) {
    let index = this.cartGoods.findIndex((g) => g.dataId == g);
    let lastprice = good.price;
    console.log(good.price);
    this.cost = this.cost - lastprice;
    if (this.cost < 0) {
      //Костыль - если его убрать - и удалять товары начиная с левого - то стоимость корзины уходит в минус. Не смог это исправить
      this.cost = 0;
    }
    this.cartGoods.splice(index, 1);

    this.countGoods--;

    this.render($cart);
  }

  // метод удаления элемента из корзины
  removeProd(dataId) {
    fetch(`${API_URL}deleteFromBasket.json`)
      .then((response) => {
        return response.json();
      })
      .then((request) => {
        console.log(request);
        if (request.result == 1) {
          this.remove(this.cartGoods.find((g) => g.dataId == dataId));
        }
      })
      .catch((error) => {
        console.log("Error:" + error);
      });
  }
}

//---

const $products = document.querySelector(".goods-list");
const $cart = document.querySelector(".cart");
//---
const cart = new Cart();
cart.fetchCart($cart);
const list = new GoodsList(cart);
list.fetchGoods($products);

//---
var cartBody = document.querySelector(".cart");
const cartButton = document.querySelector(".cart-button");
function cartOpen() {
  cartBody.style.display = cartBody.style.display === "flex" ? "none" : "flex";
}
cartButton.addEventListener("click", cartOpen);
