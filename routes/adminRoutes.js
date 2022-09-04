const express = require("express");
const path = require("path");
let code;
let date_ob = new Date();
let hours = date_ob.getHours();
// const clip = require("clipboardy");

// // Copy
// clip.writeSync("🦄");

const activeUrls = require("../public/js/activeUrls");
const routes = express.Router();
const crypto = require("crypto");
let currentUrl;

const fs = require("fs");

const links = [];

const link = {};

function id() {
  return crypto.randomBytes(20).toString("hex");
}

// function addLink(code, timeSlot) {
//   link[code] = timeSlot;
//   links.push(link);
//   fs.writeFile("links.json", JSON.stringify(links), (err) => {
//     // Catch this!
//     if (err) throw err;

//     console.log("Users saved!");
//   });
//   activeUrls[code] = timeSlot;
//   console.log(activeUrls);
// }
routes.get("/admin", (req, res, next) => {
  res.render("admin");
});

routes.post("/create", (req, res, next) => {
  let a = req.body.time;
  // console.log(a);
  code = id();
  currentUrl = `https://localhost:1234/${code}`;
  link[code] = a;
  // links.push(link);

  return res.redirect("/copy-link");
});

routes.get(`/copy-link`, function (req, res, next) {
  // console.log("Hello");
  // console.log(link);
  // console.log("Hello again");
  // console.log(link[code]);
  // console.log("Hello once again");
  // console.log(code);
  res.render("unique-link", {
    // link: currentUrl,
    code: code,
  });
});
routes.get("/code", (req, res, next) => {
  let t;

  // console.log("Hello from inside the link");
  // console.log(code);
  // console.log(":(");
  // console.log(link);
  // console.log("Hours are");
  // console.log(hours);
  let time = link[code];
  if (time == 0) {
    t = "12 am";
  } else if (parseInt(time) < 11) {
    t = `${parseInt(time)} am`;
  } else if (parseInt(time) == 12) {
    t = "12 pm";
  } else {
    t = `${parseInt(time) - 12} pm`;
  }
  console.log(t);
  if (t == hours) {
    return res.render("join");
  }
  res.render("link", {
    link: t,
  });
});

exports.routes = routes;
exports.links = link;
