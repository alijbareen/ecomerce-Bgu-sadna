const mongoose = require("mongoose");
const Order = require("./orderModel");

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: "Name is required",
    },
    isActive: {
      type: Boolean,
      required: "isActive is required",
      default: true,
    },
    managers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: [],
      },
    ],
    owners: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: [],
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        default: [],
        required: true,
      },
    ],
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
        default: [],
      },
    ],
    policies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "policy",
        required: true,
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
