const express = require("express");
const router = express.Router();

router.use(express.json());

router.post("/", (req, res) => {
  const name = req.body.name;
  res.send(`Hello ${name}`);
});

module.exports = router;
