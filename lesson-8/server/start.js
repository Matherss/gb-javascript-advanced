const express = require("express");
const fs = require("fs");

const port = 3000;
const static_dir = "../public";

const app = express();

app.use(express.json());

app.use(express.static(static_dir));

app.get("/catalogData", (req, res) => {
  fs.readFile("data/catalog.json", "utf8", (err, data) => {
    res.send(data);
  });
});
app.get("/getBasket", (req, res) => {
  fs.readFile("data/cart.json", "utf8", (err, data) => {
    res.send(data);
  });
});

app.post("/addToCart", (req, res) => {
  fs.readFile("data/cart.json", "utf8", (err, data) => {
    const cart = JSON.parse(data);

    let id = 1;

    if (cart.length > 0) {
      id = cart[cart.length - 1].id_product + 1;
    }

    const item = req.body;
    item.id_product = id;

    cart.push(item);

    fs.writeFile("data/cart.json", JSON.stringify(cart), (err) => {
      console.log("done");
      let logger = fs.readFileSync("data/stats.json", { encoding: "utf-8" });
      logger = JSON.parse(logger);
      logger.push({
        action: "add",
        product: req.body.product_name,
        time: new Date().toString(),
      });
      fs.writeFile("data/stats.json", JSON.stringify(logger), (err) => {
        if (err) {
          console.log("log err");
        }
      });
      res.end();
    });
  });
});

app.post("/deleteFromBasket", (req, res) => {
  fs.readFile("data/cart.json", "utf8", (err, data) => {
    if (err) console.log("error111");
    const cart = JSON.parse(data);
    const index = cart.findIndex((item) => item.id_product == req.body.id_product);

    cart.splice(index, 1);

    fs.writeFile("data/cart.json", JSON.stringify(cart), (err) => {
      console.log("done2");

      let logger = fs.readFileSync("data/stats.json", { encoding: "utf-8" });
      logger = JSON.parse(logger);
      logger.push({
        action: "DELETE",
        product: req.body.product_name,
        time: new Date().toString(),
      });
      fs.writeFile("data/stats.json", JSON.stringify(logger), (err) => {
        if (err) {
          console.log("log err");
        }
      });
      res.end();
    });
  });
});

app.listen(port, function () {
  console.log("server is running on port " + port + "!");
});
