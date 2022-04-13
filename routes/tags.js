var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler, storiesByTags } = require("./utils");

router.get('/tags/:id', asyncHandler(async(req,res, next) =>{
    const tag = req.params.id

    const tagName = await db.Tag.findByPk(tag)

    const tagStories = await storiesByTags(tag);

    const user = await db.User.findByPk(req.session.auth.userId)

    const {stories} = tagStories

    res.render('tag-feed', {
        stories,
        user,
        tagName
    })
}))

module.exports = router