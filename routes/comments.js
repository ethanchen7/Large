var express = require("express");
var router = express.Router();
const { asyncHandler } = require("./utils");
const { restoreUser, requireAuth } = require('../auth')
const { commentValidators } = require('../routes/validators')
const { validationResult } = require("express-validator");


const db = require("../db/models");

router.post("/comment", restoreUser, requireAuth, commentValidators, asyncHandler(async (req, res) => {

    const { text, storyId } = req.body;

    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
        const userId = req.session.auth.userId;
        await db.Comment.save({ text, userId, storyId })
    } else {
        const errors = validationErrors.array().map((error) => error.msg);
    }
}))

module.exports = router