const bcrypt = require("bcryptjs");
const ShoppingBasket = require("../models/shoppingBasketModel");
const ShoppingCart = require("../models/shoppingCartModel");
const Store = require("../models/storeModel");

const shoppingCart1 = new ShoppingCart();
// const shoppingCart2 = new ShoppingCart();
// const ShoppingBasket1 = new ShoppingBasket();
const storeA = new Store();

const data = {
  baskets: [],
  carts: [],
  users: [
    {
      name: "adidasowner",
      email: "adidas@a.com",
      password: bcrypt.hashSync("a", 8),
      isAdmin: false,
      isOwner: true,
      isManager: false,
      isMember: true,
      age: 18,
      cart: shoppingCart1,
    },
    // {
    //   name: "nikeowner",
    //   email: "nike@b.com",
    //   password: bcrypt.hashSync("b", 8),
    //   isAdmin: false,
    //   isOwner: true,
    //   isManager: false,
    //   isMember: true,
    //   age: 15,
    //   cart: shoppingCart2,
    // },
    // {
    //   name: "c",
    //   email: "c@c.com",
    //   password: bcrypt.hashSync("c", 8),
    //   isAdmin: false,
    //   isOwner: false,
    //   isManager: false,
    //   isMember: true,
    //   age: 20,
    // },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
      store: storeA,
    },
    // {
    //   name: "Adidas Fit Shirt",
    //   category: "Shirts",
    //   image: "/images/p2.jpg",
    //   price: 100,
    //   countInStock: 20,
    //   brand: "Adidas",
    //   rating: 4.0,
    //   numReviews: 10,
    //   description: "high quality product",
    //   store: "60babdecf1adaa3594c3c1df",
    // },
    // {
    //   name: "Lacoste Free Shirt",
    //   category: "Shirts",
    //   image: "/images/p3.jpg",
    //   price: 220,
    //   countInStock: 0,
    //   brand: "Lacoste",
    //   rating: 4.8,
    //   numReviews: 17,
    //   description: "high quality product",
    //   store: "60babdecf1adaa3594c3c1df",
    // },
    // {
    //   name: "Nike Slim Pant",
    //   category: "Pants",
    //   image: "/images/p4.jpg",
    //   price: 78,
    //   countInStock: 15,
    //   brand: "Nike",
    //   rating: 4.5,
    //   numReviews: 14,
    //   description: "high quality product",
    //   store: "60babdecf1adaa3594c3c1df",
    // },
    // {
    //   name: "Puma Slim Pant",
    //   category: "Pants",
    //   image: "/images/p5.jpg",
    //   price: 65,
    //   countInStock: 5,
    //   brand: "Puma",
    //   rating: 4.5,
    //   numReviews: 10,
    //   description: "high quality product",
    //   store: "60babdecf1adaa3594c3c1df",
    // },
    // {
    //   name: "Adidas Fit Pant",
    //   category: "Pants",
    //   image: "/images/p6.jpg",
    //   price: 139,
    //   countInStock: 12,
    //   brand: "Adidas",
    //   rating: 4.5,
    //   numReviews: 15,
    //   description: "high quality product",
    //   store: "60babdecf1adaa3594c3c1df",
    // },
  ],
  stores: [
    { name: "Adidas", owner: "adidas@a.com" },
    { name: "Nike", owner: "nike@a.com" },
  ],
};

module.exports = data;
