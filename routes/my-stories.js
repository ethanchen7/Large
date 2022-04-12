var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

router.get("/my-stories/new", csrfProtection, (req, res) => {
  res.render("new-story", { crsfToken: req.crsfToken() });
});

// NEED:
// requireAuth
// validators
// additional inputs from modal (tags)
// userId when logged in
router.post(
  "/my-stories/new",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { title, article } = req.body;
    // temporary
    const tagId = 1;
    const userId = 1;
    const state = "published";

    const newStory = db.Story.build({
      title,
      article,
      tagId,
      userId,
      state,
    });

    await newStory.save();
    console.log("New Story created");
    res.redirect("/feed");
  })
);

module.exports = router;
