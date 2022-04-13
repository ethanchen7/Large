var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { restoreUser } = require("../auth");
const { csrfProtection, asyncHandler, splashPageQueries } = require("./utils");

/* GET splash page. */


router.get("/", csrfProtection, restoreUser, asyncHandler(async (req, res, next) => {

  const queries = await splashPageQueries();
  const { user, stories, newStories, tags } = queries
  // console.log("line 15 ********", res.locals.authenticated);
  if (!res.locals.authenticated) {

    res.render("user-register", {
      user,
      newStories,
      stories,
      tags,
      csrfToken: req.csrfToken(),
    });

  } else {
    // console.log('line 27 *************', res.locals.user.id)
    res.render("feed", {
      user,
      newStories,
      stories,
      tags,
      csrfToken: req.csrfToken(),

    });
  }
}));

router.get("/login", csrfProtection, function (req, res, next) {
  res.render("user-register", { csrfToken: req.csrfToken() });
});

router.get("/feed", asyncHandler(async (req, res) => {
  const queries = await splashPageQueries()

  const { user, stories, tags } = queries



  res.render("feed", {
    user,
    stories,
    tags
  });
}));

module.exports = router;
