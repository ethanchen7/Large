var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

/* GET splash page. */

router.get("/login", csrfProtection, function (req, res, next) {
  res.render("user-login", { csrfToken: req.csrfToken() });
});

module.exports = router;
