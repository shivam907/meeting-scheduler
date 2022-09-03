const express = require("express");
const path = require("path");
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

function addLink(code, timeSlot) {
  link[code] = timeSlot;
  links.push(link);
  fs.writeFile("links.json", JSON.stringify(links), (err) => {
    // Catch this!
    if (err) throw err;

    console.log("Users saved!");
  });
  activeUrls[code] = timeSlot;
  console.log(activeUrls);
}
routes.get("/admin", (req, res, next) => {
  res.render("admin");
});

routes.post("/create", (req, res, next) => {
  let a = req.body.time;
  console.log(a);
  let code = id();
  currentUrl = `https://localhost:5000/${code}`;
  addLink(code, a);
  return res.redirect("/copy-link");
});

routes.get("/copy-link", (req, res, next) => {
  res.render("unique-link", {
    link: currentUrl,
  });
});

module.exports = routes;
