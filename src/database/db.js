const { db } = require("../firebase.js");

const products = db.collection("products");
const orders = db.collection("orders");
const banners = db.collection("banners");
const users = db.collection("users");
const cart = db.collection("cart");

module.exports = {
  products,
  orders,
  banners,
  users,
  cart,
};
