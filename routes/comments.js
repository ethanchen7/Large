const express = require("express");
const router = express.Router();
const { asyncHandler } = require("./utils");
const { restoreUser, requireAuth } = require('../auth')
const { commentValidators } = require('../routes/validators')
const { validationResult } = require("express-validator");

const db = require("../db/models");

router.post("/comment", restoreUser, requireAuth, asyncHandler(async (req, res) => {

    const { text, storyId } = req.body;
    // console.log("@@@@ text: ", text);
    // console.log("**** storyId: ", storyId);

    // const validationErrors = validationResult(req);
    // console.log(validationErrors.isEmpty());

    // if (validationErrors.isEmpty()) {
    // console.log("$$$$ req.session: ", req.session.auth.userId)
    const userId = req.session.auth.userId;
    // console.log("%%%%%% text, userId, storyId", text, userId, storyId)
    await db.Comment.create({ text, userId, storyId });

    const user = await db.User.findByPk(userId);

    const response = {
        message: "success",
        user,
    };
    return res.json(response);
    console.log("THIS IS STILL PRINTING")
    // } else {
    //     const errors = validationErrors.array().map((error) => error.msg);
    // }
}))

module.exports = router