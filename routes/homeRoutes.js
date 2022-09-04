const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const alert = require("alert");
const public = require("../public/js/publicAccounts.js");
const admin = require("../public/js/adminAccounts.js");
let username, password;
const routes = express.Router();

routes.get("/", (req, res, next) => {
  res.render("index");
});

routes.get("/404", (req, res, next) => {
  res.render("404");
});

routes.post("/check-public", (req, res) => {
  //   console.log(req.body);
  username = req.body.username;
  password = req.body.password;
  // console.log("Step 1");
  // console.log("Username:", username, "\n", "Password", password);
  // console.log(public);
  for (let i in public) {
    if (username === i && password === public[i]) {
      console.log("Authenticated success");
      return res.redirect("/public");
    } else {
      // popups.alert({
      //   content: "hello",
      // });
      alert("hello 2");
      return res.redirect("/incorrectCredentials");
      // res.jsonp({ success: true });

      // return res.redirect("/404");
    }
  }
  res.redirect("/public");
});

routes.get("/incorrectCredentials", (req, res, next) => {
  res.render("incorrectCredentials");
});

routes.post("/check-admin", (req, res) => {
  //   console.log(req.body);
  username = req.body.username;
  password = req.body.password;
  // console.log("Step 1");
  // console.log("Username:", username, "\n", "Password", password);
  console.log(admin);
  for (let i in admin) {
    if (username === i && password === admin[i]) {
      console.log("Authenticated success");
      return res.redirect("/admin");
    }
    // else {
    //   return res.redirect("/404");
    // }
  }
  res.redirect("/admin");
});

routes.get("/admin-index", (req, res, next) => {
  res.render("admin-index");
});

module.exports = routes;
