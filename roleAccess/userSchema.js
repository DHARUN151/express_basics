const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  userId: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Staff", "Guest"],
    default: "guest",
  },
});

module.exports = mongoose.model("User", userSchema);
