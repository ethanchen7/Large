var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

/* GET splash page. */

router.get("/", requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  console.log(req.session.auth);
  if (!req.session.auth) {
    const user = db.User.build();
    const stories = await db.Story.findAll({
      include: [db.User, db.Tag],
      order: [['createdAt', 'ASC']],
    });

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
    stories.forEach(story => {
      const monthIndex = story.updatedAt.getMonth();
      const month = months[monthIndex];

      story.date = `${month} ${story.updatedAt.getDate().toString()}`
    })
    // change to index after
    res.render("user-register", {
      user,
      trending: stories,
      csrfToken: req.csrfToken(),
    });
  } else {
    res.render("feed");
  }
}));


router.get("/login", csrfProtection, function (req, res, next) {
  res.render("user-login", { csrfToken: req.csrfToken() });
});

module.exports = router;
