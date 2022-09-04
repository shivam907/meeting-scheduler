const express = require("express");
const app = express();

const port = 8000;
const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

clientID =
  "159118399304-c6554jt297atcorlkqg2gqrb0rpa496e.apps.googleusercontent.com";
clientSecret = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "http://localhost:8000/auth/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log("refreshToken : ", refreshToken);
      return cb();
    }
  )

  // 1//0gDTg1KxrkTMZCgYIARAAGBASNwF-L9Iri9cDyKlk3oHP07ZPY55Hw6F7hNF45rbtOGyuLW9EYBLWxuvRMLd6sVhR2J_rRMpF0d4
);

app.get(
  "/auth/callback",
  passport.authenticate("google", { failureRedirect: "/" })
);

app.get(
  "/auth",
  passport.authenticate("google", {
    scope: ["profile", "https://www.googleapis.com/auth/calendar"],
    accessType: "offline",
    prompt: "consent",
  })
);

app.get("/", function (req, res) {
  res.send("done");
});

app.listen(port, function (err) {
  if (err) {
    console.log("something wrong in starting server !!!");
    return;
  }
});
