<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
main {
  width: 1140px;
  margin: 0 auto;
}
header {
  background-color: rgba(29, 53, 87, 0.3);
}
.container {
  width: 1140px;
  height: 50px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.cart {
  padding-top: 12px;
}
.displayWhite {
  background-color: #a8dadc;
  color: #457b9d;
  margin: 50px;
  height: 300px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 2s;
  transition: all 2s;
}
.cart-button {
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #457b9d;
  color: #457b9d;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  font-weight: bold;
}
.cart-button:hover {
  border: 1px solid transparent;
  color: #f1faee;
  cursor: pointer;
  background-color: #457b9d;
}
.goods-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.goods-item {
  margin: 20px 0px 0px 0px;
  border: 2px solid #355f7a;
  padding: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0.2;
  -ms-flex-positive: 0.2;
  flex-grow: 0.2;
  background-color: #457b9d;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.goods-item h3 {
  color: #f1faee;
  font-size: 18px;
}
.goods-item p {
  color: #a8dadc;
}
.logo {
  color: #457b9d;
  font-weight: bold;
}
.item-photo {
  width: 200px;
  height: 200px;
}
#fullprice {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #457b9d;
  color: #f1faee;
  height: 55px;
}
.cart-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 50px;
  background-color: #f1faee;
  padding: 25px;
  border-radius: 15px;
}
.cart-info {
  background-color: #f1faee;
  text-align: center;
  padding: 20px;
  border-radius: 30%;
  color: #457b9d;
  margin: 20px;
}
.added {
  color: red;
  background-color: blue;
}
#fullprice-2 {
  text-align: center;
  width: 100%;
  background-color: #457b9d;
  color: #f1faee;
}
.search {
  width: 1140px;
  margin: 10px auto;
}
.search .container {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
}
.search .container input {
  width: 300px;
  padding: 5px;
  margin: 5px;
}
label {
  padding-top: 15px;
}
h3 {
  padding-top: 10px;
}
.err {
  border: #e63946;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
}
.hidden {
  display: none;
}
.fail {
  color: #e63946;
}
.regexp {
  background: #a8dadc;
}
.regexp input,
.regexp textarea {
  background: #457b9d;
  color: #f1faee;
}
.regexp form input[type="submit"] {
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: #f1faee;
  border: 1px solid #457b9d;
  color: #457b9d;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  font-weight: bold;
}
.regexp form input[type="submit"]:hover {
  border: 1px solid transparent;
  color: #f1faee;
  cursor: pointer;
  background-color: #457b9d;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #a8dadc;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #a8dadc;
}
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: #a8dadc;
}
input::placeholder,
textarea::placeholder {
  color: #a8dadc;
}
.regexp-container {
  width: 1140px;
  margin: 0 auto;
  padding: 25px;
}
.replace-button {
  margin-bottom: 10px;
}
</style>
