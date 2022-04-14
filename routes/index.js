var express = require("express");
var router = express.Router();

const db = require("../db/models");

const { requireAuth, restoreUser } = require("../auth");
const { csrfProtection, asyncHandler, splashPageQueries, followingArticles } = require("./utils");


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
    const queries = await splashPageQueries()

    const followingQueries = await followingArticles(req, res)

    const { stories, tags } = queries

    const { followingStories } = followingQueries

    const userId = req.session.auth.userId

    const user = await db.User.findByPk(userId)


    res.render("feed", {
      user,
      stories,
      tags,
      followingStories
    });
  }
}));

router.get("/login", csrfProtection, function (req, res, next) {
  res.render("user-register", { csrfToken: req.csrfToken() });
});

module.exports = router;
