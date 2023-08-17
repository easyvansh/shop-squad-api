const db = require("./db");

const getUser = async (ref) => {
  const user = await db.users.where("ref", "==", ref).get();
  return user.docs[0].data();
};

const createUser = async (user) => {
  const result = await db.users.add(user);
  return { ...user, id: result.id };
};

module.exports = {
  getUser,
  createUser,
};
