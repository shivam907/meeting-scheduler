const express = require("express");
const path = require("path");
// const clip = require("clipboardy");

// // Copy
// clip.writeSync("🦄");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("urls", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

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
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { code: timeSlot };
    dbo.collection("customers").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
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
