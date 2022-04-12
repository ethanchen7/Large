var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

/* GET splash page. */
router.get(
  "/",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    console.log(req.session.auth);
    if (!req.session.auth) {
      const user = db.User.build();
      const users = await db.User.findAll();
      console.log(users);
      // change to index after
      res.render("user-register", {
        user,
        csrfToken: req.csrfToken(),
      });
    } else {
      res.render("feed");
    }
  })
);

router.get("/login", csrfProtection, function (req, res, next) {
  res.render("user-login", { csrfToken: req.csrfToken() });
});

module.exports = router;
