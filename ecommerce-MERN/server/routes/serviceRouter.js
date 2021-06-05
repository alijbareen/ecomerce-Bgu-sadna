const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Store = require("../models/storeModel");
const data = require("../seeds/seed");
const serviceRouter = express.Router();
const User = require("../models/userModel");
const ShoppingBasket = require("../models/shoppingBasketModel");
const ShoppingCart = require("../models/shoppingCartModel");

//https://www.npmjs.com/package/express-async-handler/v/1.1.4
// if error, it will be passed to error handler defined in server.js
serviceRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // remove data before inserting. it will remove all data... be cautious to use it
    // await Product.deleteMany({});

    await Product.deleteMany({});
    await User.deleteMany({});
    await Store.deleteMany({});

    const createdProducts = await Product.insertMany(data.products);
    const createdUsers = await User.insertMany(data.users);
    const user = createdUsers[0];

    const store1 = new Store({
      name: "Nike",
      owners: [user],
    });

    const user2 = await User.findOne();
    const store2 = new Store({
      name: "Adidas",
      owners: [user2, user],
    });

    const createdStores = await Store.insertMany([store1, store2]);

    //add products to store
    createdStores[0].products = createdProducts;
    createdStores[0].save();

    //add products to shoppingcart
    const shoppingCart1 = new ShoppingCart();
    const ShoppingBasket1 = new ShoppingBasket();
    ShoppingBasket1.products = [...ShoppingBasket1.products, createdProducts];
    shoppingCart1.baskets = [...shoppingCart1.baskets, ShoppingBasket1];
    ShoppingBasket1.save();
    shoppingCart1.save();
    user.cart = shoppingCart1;
    user.save();

    res.send({ createdStores, createdProducts, createdUsers });
  })
);

serviceRouter.post(
  "/getUserCart",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body.user);
    const usercart = await User.findById(req.body.user).then((doc) => doc.cart);
    console.log(usercart);
    // console.log(usercart);
    res.send({ usercart });
  })
);

module.exports = serviceRouter;
