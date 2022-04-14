var express = require("express");
var router = express.Router();
const { asyncHandler } = require("./utils");
const { restoreUser, requireAuth } = require('../auth')

const db = require("../db/models");
const { splashPageQueries, assignStoryDate, assignReadTime } = require('./utils');

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

    // For Content Bar
    const queries = await splashPageQueries()
    const { recommendedUsers, newStories, tags } = queries
    const contentBarStories = newStories.slice(0, 3);
    const contentBarTags = tags.slice(0, 7);

    console.log(story.User.firstName);
    res.render('single-story', {
        story,
        user,
        contentBarStories,
        contentBarTags,
        recommendedUsers
    });
}))

module.exports = router;