const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Store = require("../models/storeModel");
const User = require("../models/userModel");
const { products } = require("../seeds/seed");
const data = require("../seeds/seed");
const { generateToken, isAuth } = require("../utils/util");
const storeRouter = express.Router();

//https://www.npmjs.com/package/express-async-handler/v/1.1.4
// if error, it will be passed to error handler defined in server.js
storeRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // remove users before inserting. it will remove all users ... be cautious to use it

    await Store.deleteMany({});

    const user = await User.findOne({ email: "a@a.com" });
    const store1 = new Store({
      name: "Nike",
      owners: [user],
    });

    const user2 = await User.findOne({ email: "b@b.com" });
    const store2 = new Store({
      name: "Adidas",
      owners: [user2, user],
    });

    const createdStores = await Store.insertMany([store1, store2]);
    res.send({ createdStores });
  })
);

// get all products /api/products/
storeRouter.get(
  "/getAllStores",
  expressAsyncHandler(async (req, res) => {
    const stores = await Store.find({});
    res.send(stores);
  })
);

// /api/users/register
storeRouter.post(
  "/openStore",
  expressAsyncHandler(async (req, res) => {
    // console.log('register req.body:', body);

    //check if Member is already registered
    const user = await User.findById(req.body.owner);

    // const user = await User.findOne({ email: req.body.owner });

    if (!user.isMember) {
      res
        .status(401)
        .send({ message: "User in not registered cannot open store" });
    }

    //create a new user
    const store = new Store({
      name: req.body.name,
      owners: [req.body.owner], //or user not owner
    });

    // save new store in db
    const createdStore = await store.save();

    // send user obj back
    res.send({
      _id: createdStore._id,
      name: createdStore.name,
      owners: createdStore.owners,
    });
  })
);

// /api/store/details
storeRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    //get user info from User db
    const store = await Store.findById(req.params.id);
    //send user obj backto front end if there is user
    if (store) {
      res.send(store);
    } else {
      res.status(404).send({ message: "Store Not Found" });
    }
  })
);

storeRouter.post(
  "/addProductToStore",
  expressAsyncHandler(async (req, res) => {
    // console.log('register req.body:', body);

    //check if Member is already registered
    const user = await User.findById(req.body.user);
    const store = await Store.findById(req.body.store);

    // checkIfOwnerorManager(req.body.user, req.body.store);
    //create a new user
    const product = new Product({
      name: req.body.name,
      category: req.body.category,
      image: req.body.image,
      price: req.body.price,
      countInStock: req.body.countInStock,
      brand: req.body.brand,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      description: req.body.description,
    });
    console.log(product);
    // save new store in db
    const createdProduct = await Product.insertMany([product]);
    // person.friends.push(friend);
    // person.save(done);
    Store.findById(req.body.store, function (err, doc) {
      if (err) {
      }
      doc.products = [...products, createdProduct];
      doc.save(res.send);
    });

    // send user obj back
    res.send({
      result: "OK",
      createdProduct: createdProduct,
    });
  })
);

// get all products /api/products/
storeRouter.post(
  "/getmyStores",
  expressAsyncHandler(async (req, res) => {
    const user = await User.find({ email: req.body.email });
    const stores = await Store.find({ owners: { $in: [user] } });
    res.send(stores);
  })
);

storeRouter.post(
  "/addMangerToStore",
  expressAsyncHandler(async (req, res) => {
    //check permissions
    // person.friends.push(friend);
    // person.save(done);
    //add user to store
    //return ok
    res.send({});
  })
);

storeRouter.post(
  "/removeMangerFromStore",
  expressAsyncHandler(async (req, res) => {
    //check permissions
    //remove user from store
    //return ok
    res.send({});
  })
);

storeRouter.post(
  "/removeOwnerFromStore",
  expressAsyncHandler(async (req, res) => {
    //check permissions
    //remove user from store
    //return ok
    res.send({});
  })
);

storeRouter.post(
  "/addOwnertoStore",
  expressAsyncHandler(async (req, res) => {
    //check permissions
    //remove user from store
    //return ok
    res.send({});
  })
);

module.exports = storeRouter;
