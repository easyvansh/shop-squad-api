const { db } = require("../firebase.js");

const products = db.collection("products");
const orders = db.collection("orders");
const banners = db.collection("banners");
const users = db.collection("users")

module.exports = {
  products,
  orders,
  banners,
  users
};
