const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const public = require("../public/js/publicAccounts.js");
const admin = require("../public/js/adminAccounts.js");
const urls = require("../public/js/activeUrls");

const routes = express.Router();

for (let i in urls) {
  routes.get(`/${i}`, (req, res, next) => {
    res.sendFile(`<h1>your meeting time is ${urls[i]}</h1>`);
  });
}
