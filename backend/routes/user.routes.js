const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/add", (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    email: req.body.email,
    phone: req.body.phone,
    userId: req.body.userId,
  });
  newUser.save();
  res.json(`User created succesfully ${newUser}`);
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ status: "User Deleted" });
});

router.put("/edit/:id", async (req, res) => {
  const { firstName, email, phone, userId } = req.body;
  const userUpdated = { firstName, email, phone, userId };
  await User.findByIdAndUpdate(req.params.id, userUpdated, {
    omitUndefined: true,
  });
  res.json({ status: "User Updated" });
});

module.exports = router;
