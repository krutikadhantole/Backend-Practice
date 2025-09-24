const express = require("express");

const router = express.Router();

// Get Api

router.use((req, res, next) => {
  console.log("this middleware is between router and api");
  next();
});

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the home page",
  });
});

module.exports = router;
