const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const public = require("../public/js/publicAccounts.js");
const admin = require("../public/js/adminAccounts.js");
const urls = require("./adminRoutes");

const routes = express.Router();

// for (let i in urls.links[0]) {
//   console.log("stop 1");
//   routes.get(`/${i}`, (req, res, next) => {
//     console.log("stop 2");
//     res.sendFile(`<h1>your meeting time is ${urls[i]}</h1>`);
//   });
// }

routes.get("/unique", (req, res) => {
  // console.log("Hello");
  // console.log(urls.links);
});

module.exports = routes;
