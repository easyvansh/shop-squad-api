const db = require("./db");

const createCart = async (cart) => {
  const result = await db.cart.add(cart);
  return { ...cart, id: result.id };
};


const getCart = async (ref) => {
  const cart = await db.cart.where("ref", "==", ref).get();
  return cart.docs[0].data();
};



const clearCart = async (ref) => {
    const cart = await db.cart.where("ref", "==", ref).get();
    cart.delete(docs.ref);
  };

module.exports = {
  getCart,
  createCart,
  clearCart
};