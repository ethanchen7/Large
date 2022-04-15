const express = require("express");
const router = express.Router();
const { asyncHandler } = require("./utils");
const { restoreUser, requireAuth } = require('../auth')

const db = require("../db/models");

router.post("/comment", restoreUser, requireAuth, asyncHandler(async (req, res) => {

    const { text, storyId } = req.body;

    const userId = req.session.auth.userId;
    await db.Comment.create({ text, userId, storyId });

    const user = await db.User.findByPk(userId);
    const response = {
        message: "success",
        user,
    };
    return res.json(response);
}))

module.exports = router