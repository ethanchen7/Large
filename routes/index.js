var express = require("express");
var router = express.Router();

const db = require("../db/models");

const { requireAuth, restoreUser } = require("../auth");
const {
  csrfProtection,
  asyncHandler,
  splashPageQueries,
  followingArticles,
} = require("./utils");

/* GET splash page. */

router.get(
  "/",
  csrfProtection,
  restoreUser,
  asyncHandler(async (req, res, next) => {
    const queries = await splashPageQueries();
    const { user, stories, newStories, tags } = queries;
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
      const queries = await splashPageQueries();

      const { user, recommendedUsers, stories, newStories, tags } = queries;

      const followingQueries = await followingArticles(req, res);
      const { followingStories } = followingQueries;

      const contentBarStories = newStories.slice(0, 3);
      const contentBarTags = tags.slice(0, 7);
      // console.log('line 27 *************', res.locals.user.id)
      res.render("feed", {
        user,
        newStories,
        recommendedUsers,
        stories,
        tags,
        contentBarStories,
        contentBarTags,
        followingStories,
      });
    }
  })
);

router.get("/login", csrfProtection, function (req, res, next) {
  res.render("user-register", { csrfToken: req.csrfToken() });
});

module.exports = router;
