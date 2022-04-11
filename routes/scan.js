const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
