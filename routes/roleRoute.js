const express = require("express");
const User = require("../roleAccess/userSchema");
const router = express.Router();
const checkRole = require("../middleware/roleMiddleware");

//for all users
router.get("/", checkRole(["Guest", "staff", "admin"]), async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error. Could not fetch users. " });
  }
});

//post req for admin and staff
router.post("/", checkRole(["staff", "admin"]), async (req, res) => {
  try {
    const { username, userId, role } = req.body;
    const newUser = new User({ username, userId, role });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    req.status(400).json({ message: "Access for only Admin and Staff" });
  }
});

// del req for admin
router.delete("/:userId", checkRole(["admin"]), async (req, res) => {
  try {
    const deleteUser = await User.findOneAndDelete({
      userId: req.params.userId,
    });
    if (!deleteUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deletd successfully! " });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error! ", error: err.message });
  }
});

module.exports = router;
