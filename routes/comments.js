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
    const comments = await db.Comment.findAll();
    const newCommentId = comments.length;
    const response = {
        message: "success",
        user,
        newCommentId,
    };
    return res.json(response);
}))

router.put("/comment/:commentId", asyncHandler(async (req, res) => {

    const { text } = req.body;
    const commentId = parseInt(req.params.commentId);
    const comment = await db.Comment.findByPk(commentId);

    comment.text = text;
    await comment.save();

    res.json({ message: "success" });
}))

router.delete("/comment/:commentId", asyncHandler(async (req, res) => {

    const commentId = parseInt(req.params.commentId);
    const comment = await db.Comment.findByPk(commentId);

    await comment.destroy();

    res.json({ message: "success" })
}))

module.exports = router