var express = require("express");
var router = express.Router();

const db = require("../db/models");

const { requireAuth, restoreUser } = require("../auth");
const {
  csrfProtection,
  asyncHandler,
  splashPageQueries,
  followingArticles,
  getRecommended,
} = require("./utils");

router.get("/", csrfProtection, restoreUser, asyncHandler(async (req, res, next) => {

  const queries = await splashPageQueries();
  const { user, stories, newStories, tags } = queries
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

    const currUser = await db.User.findByPk(userId)

    const contentBarStories = newStories.slice(0, 3);
    const contentBarTags = tags.slice(0, 7);


    const nonFollowedAccounts = await getRecommended(currUser.id)
    res.render("feed", {
      currUser,
      newStories,
      nonFollowedAccounts,
      stories,
      tags,
      contentBarStories,
      contentBarTags,
      followingStories,
    });
  }
}));

router.get("/login", csrfProtection, function (req, res, next) {
  res.render("user-register", { csrfToken: req.csrfToken() });
});

router.get('/thanks', requireAuth, (req,res,next) => {
  res.render('dummy-page')
})

module.exports = router;
