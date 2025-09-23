const express = require("express");
const router = express.Router();

router.get(
  "/timeNow",
  (req, res, next) => {
    console.log("Before sending time...");
    next();
  },
  (req, res) => {
    const now = new Date();
    const readableTimestamp = now.toISOString();
    res.send({ time: readableTimestamp });
  }
);

module.exports = router;
