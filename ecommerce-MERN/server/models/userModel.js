const mongoose = require("mongoose");
const ShoppingCart = require("./shoppingCartModel");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    email: {
      type: String,
      require: "Email is required",
      unique: true,
    },
    password: {
      type: String,
      required: "Password is required",
    },
    isMember: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isManager: {
      type: Boolean,
      required: true,
      default: false,
    },
    isOwner: {
      type: Boolean,
      required: true,
      default: false,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ShoppingCart,
      required: false,
    },
    age: {
      type: Number,
      required: true,
      default: 18,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
