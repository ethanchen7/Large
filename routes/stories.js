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
    const user = db.User.findByPk(userId);

    story.date = assignStoryDate(story);
    story.readTime = assignReadTime(story);

    const allClapsOfStory = await db.StoryClap.findAll({
        where: {storyId}
    })
    const allClapsOfStoryCount = allClapsOfStory.length
    res.render('single-story', { story, user, allClapsOfStoryCount });
}))

router.post('/stories/:id(\\d+)/clap/new', requireAuth, asyncHandler(async (req, res, next) => {
    const storyId = req.params.id
    const userId = req.session.auth.userId;
    const newClap = db.StoryClap.build({
        storyId,
        userId
    })
    await newClap.save()
    const allClapsOfStory = await db.StoryClap.findAll({
        where: {storyId}
    })
    updatedClapCount = allClapsOfStory.length
    res.json({updatedClapCount})
}))

module.exports = router;