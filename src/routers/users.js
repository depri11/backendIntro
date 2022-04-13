const express = require("express");
const routers = express.Router();

routers.get("/", (req, res) => {
  res.send("Hallo from users");
});

module.exports = routers;
