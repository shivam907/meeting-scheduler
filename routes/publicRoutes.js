const express = require("express");
const path = require("path");
const links = require("./publicRoutes");
let url;
const routes = express.Router();
let name, email, password;
routes.get("/public", (req, res, next) => {
  res.render("public");
});

// const Meeting = require("google-meet-api").meet;
// Meeting({
//   clientId:
//     "159118399304-c6554jt297atcorlkqg2gqrb0rpa496e.apps.googleusercontent.com",
//   clientSecret: "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",
//   refreshToken:
//     "1//0g4I0WYbbubewCgYIARAAGBASNwF-L9IraN4A36vDJDkxC8WCw2OPG5dS0b5nE15G3laV12nnZkY8vZuDJE2WGW4sYm0Vjso1DhY",
//   date: "2022-09-04",
//   time: "10:59",
//   summary: "summary",
//   location: "location",
//   description: "description",
// })
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch((err) => console.log(err));

routes.post("/schedule", (req, res, next) => {
  url = req.body.link;
  // console.log("schedule");
  // console.log(url.length);
  if (url.length == 40) {
    return res.redirect("/join");
  } else {
    return res.redirect("/404");
  }
  console.log(url);
});
routes.get("/join", (req, res, next) => {
  res.render("join", {
    code: url,
  });
});

routes.post("/join-meet", (req, res, next) => {
  name = req.body.name;
  email = req.body.email;
  password = req.body.password;
  res.redirect("/google");
});

routes.get("/google", (req, res, next) => {
  // Meeting();
  res.render("google", {
    name: name,
    email: email,
    password: password,
  });
});
module.exports = routes;
