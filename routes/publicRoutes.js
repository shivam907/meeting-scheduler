const express = require("express");
const path = require("path");

let url;
const routes = express.Router();

routes.get("/public", (req, res, next) => {
  res.render("public");
});

routes.post("/schedule", (req, res, next) => {
  url = req.body.link;
  console.log(url);
});

module.exports = routes;
