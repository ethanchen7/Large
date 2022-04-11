var express = require("express");
var router = express.Router();
const { requireAuth } = require("../auth");

/* GET splash page. */
router.get("/", requireAuth, function (req, res, next) {
  if (!res.locals.authenticated) {
    res.render("index", { title: "a/A Express Skeleton Home" });
  } else {
    res.render("feed", { title: "a/A Express Skeleton Home" });
  }
});

module.exports = router;
