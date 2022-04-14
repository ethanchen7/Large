var express = require("express");
var router = express.Router();
const { asyncHandler } = require("./utils");
const { restoreUser, requireAuth } = require('../auth')

const db = require("../db/models");
const { splashPageQueries, assignStoryDate, assignReadTime } = require('./utils');

router.post("/comments", restoreUser, requireAuth, asyncHandler(async (req, res) => {

    const { }

    const comment = db.Comment.build({

    });
}))

module.exports = router