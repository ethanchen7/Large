var express = require("express");
var router = express.Router();
const { asyncHandler } = require("./utils");
const { restoreUser, requireAuth } = require('../auth')

const db = require("../db/models");
const { assignStoryDate, assignReadTime } = require('./utils');

router.get('/stories', asyncHandler(async (req, res, next) => {
    res.redirect('/');
}));

router.get('/stories/:id(\\d+)', restoreUser, requireAuth, asyncHandler(async (req, res, next) => {
    const storyId = req.params.id;
    const userId = req.session.auth.userId;

    const story = await db.Story.findByPk(storyId, {
        include: [db.User, db.Tag]
    });
    story.date = assignStoryDate(story);
    story.readTime = assignReadTime(story);

    const user = db.User.findByPk(userId);

    const contentBarStories = db.Stories.findAll();

    console.log(story.User.firstName);
    res.render('single-story', {
        story,
        user,

    });
}))

module.exports = router;