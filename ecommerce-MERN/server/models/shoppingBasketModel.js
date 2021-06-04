const mongoose = require("mongoose");
const Store = require("./storeModel");

const ShoppingBasketSchema = new mongoose.Schema(
  {
    //check
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Store,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ShoppingBasket = mongoose.model("ShoppingBasket", ShoppingBasketSchema);

module.exports = ShoppingBasket;
