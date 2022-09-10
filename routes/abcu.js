const express = require("express");

const router = express.Router();

router.get("/about-us", (req, res, next) => {
  res.render("aboutUs");
});
// router.get('/about-us', (req,res,next)=>{
//     res.render('aboutUs')
// })

module.exports = router;
