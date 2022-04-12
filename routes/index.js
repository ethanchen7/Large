var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler, splashPageQueries } = require("./utils");

/* GET splash page. */

router.get("/", requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  console.log(req.session.auth);
  if (!req.session.auth) {

    const queries = await splashPageQueries();

    const { user, stories, newStories, tags } = queries

    console.log(newStories[0]);

    res.render("user-register", {
      user,
      newStories,
      stories,
      tags,
      csrfToken: req.csrfToken(),

    });

  } else {
    res.render("feed");
  }
}));



router.get("/login", csrfProtection, function (req, res, next) {
  res.render("user-register", { csrfToken: req.csrfToken() });
});

router.get("/feed", (req, res) => {
  res.render("feed");
});

module.exports = router;
