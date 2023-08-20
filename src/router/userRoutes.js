const express = require("express");
const { createUser, getUser } = require("../database/users");
const router = express.Router();
router.get("/:reference", async (req, res) => {
  const user = await getUser(req.params.reference);

  if (!user) {
    res.status(404).send({ status: "FAILED", error: "user not found" });
    return;
  }

  res.send({ status: "OK", data: user });
});

router.post("/", async (req, res) => {
  const userData = req.body;
  const ref = (Math.random() + 1).toString(36).substring(7);
  userData.ref = userData.uid;
  console.log(userData);

  const newUser = await createUser(userData);

  res.status(201).send({ status: "OK", data: newUser });
});

module.exports = router;
