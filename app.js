const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const link = {};
const port = process.env.PORT || 5000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const homeRoutes = require("./routes/homeRoutes");
const adminRoutes = require("./routes/adminRoutes");
const publicRoutes = require("./routes/publicRoutes");
const linkRoutes = require("./routes/linkRoutes");

app.use(homeRoutes);
app.use(adminRoutes.routes);
app.use(publicRoutes);
app.use(linkRoutes);

app.use("*", (req, res, next) => {
  res.render("404");
});

app.listen(port);
