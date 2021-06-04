const mongoose = require("mongoose");
const ShoppingBasket = require("./shoppingBasketModel");

const shoppingCartSchema = new mongoose.Schema(
  {
    baskets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: ShoppingBasket,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ShoppingCart = mongoose.model("shoppingCart", shoppingCartSchema);

module.exports = ShoppingCart;
