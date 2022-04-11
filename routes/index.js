var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection } = require("./utils");

/* GET splash page. */
router.get("/", requireAuth, csrfProtection, function (req, res, next) {
  if (!res.locals.authenticated) {
    const user = db.User.build();
    // change to index after
    res.render("user-register", {
      title: "a/A Express Skeleton Home",
      user,
      csrfToken: req.csrfToken(),
    });
  } else {
    res.render("feed", { title: "a/A Express Skeleton Home" });
  }
});

module.exports = router;
