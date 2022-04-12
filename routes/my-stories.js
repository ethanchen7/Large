var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

router.get("/my-stories/new", csrfProtection, (req, res) => {
  res.render("new-story", { csrfToken: req.csrfToken() });
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
    const { title, article, tag } = req.body;
    let tagId;
    const tagExists = await db.Tag.findOne({
      where: { name: tag },
    });
    console.log(tagExists);
    if (tagExists) {
      tagId = tagExists.id;
    } else {
      const newTag = await db.Tag.create({
        name: tag,
      });
      tagId = newTag.id;
    }
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

// TEMPORARY
router.get("/publish", (req, res) => {
  res.render("new-story-publish");
});

module.exports = router;
