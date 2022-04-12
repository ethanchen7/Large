var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

router.get("/my-stories/new", (req, res) => {
  res.render("new-story");
});

module.exports = router;
