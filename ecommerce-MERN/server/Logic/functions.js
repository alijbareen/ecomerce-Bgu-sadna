const Product = require("../models/productModel");
const Store = require("../models/storeModel");
const User = require("../models/userModel");

export const getUserById = (userID) => {
  const user = await User.findById(userId);
  return user;
};

export const getStoreById = (storeID) => {
  const store = await Store.findById(storeID);
  return store;
};

export const getProductById = (productID) => {
  const product = await Store.findById(productID);
  return product;
};

export const checkisAdmin = (user) => {
  return user.isAdmin;
};

export const checkisManageForStore = (user, store) => {
  return user.isManager && store.manager.contains(user);
};

export const checkisOwnerForStore = (user, store) => {
  return user.isManager && store.owners.contains(user);
};
