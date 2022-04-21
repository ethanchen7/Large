var express = require("express");
var router = express.Router();
const { asyncHandler, assignDaysAgo, getFollowerCount } = require("./utils");
const { restoreUser, requireAuth } = require('../auth')

const db = require("../db/models");
const { splashPageQueries, assignStoryDate, assignReadTime, getRecommended } = require('./utils');

router.get('/stories', asyncHandler(async (req, res, next) => {
    res.redirect('/');
}));

router.get('/stories/:storyId(\\d+)', restoreUser, requireAuth, asyncHandler(async (req, res, next) => {
    const storyId = req.params.storyId;
    const userId = req.session.auth.userId;

    const story = await db.Story.findByPk(storyId, {
        include: [db.User, db.Tag, db.Comment]
    });
    story.date = assignStoryDate(story);
    story.readTime = assignReadTime(story);

    const currUser = await db.User.findByPk(userId);
    const comments = story.Comments.sort((a, b) => b.updatedAt - a.updatedAt);

    const nonFollowedAccounts = await getRecommended(userId)

    comments.forEach(async comment => {
        assignDaysAgo(comment);
        const user = await db.User.findByPk(comment.userId);
        comment.firstName = user.firstName;
        comment.lastName = user.lastName;
    })

    // For Content Bar
    const queries = await splashPageQueries()
    const { recommendedUsers, newStories, tags } = queries
    const contentBarStories = newStories.slice(0, 3);
    const storyContentBarStories = newStories.slice(0, 4);
    const contentBarTags = tags.slice(0, 7);

    const allClapsOfStory = await db.StoryClap.findAll({
        where: { storyId }
    })
    const allClapsOfStoryCount = allClapsOfStory.length

    let follows = false;
    const followCheck = await db.Follow.findAll({
        where: {
            followerId: userId,
            followingId: story.User.id
        },
    })
    if (followCheck.length) follows = true;

    const followerCount = await getFollowerCount(story.User)
    res.render('single-story', {
        story,
        currUser,
        contentBarStories,
        storyContentBarStories,
        contentBarTags,
        recommendedUsers,
        nonFollowedAccounts,
        allClapsOfStoryCount,
        comments,
        follows,
        followerCount,
    });
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
        where: { storyId }
    })
    updatedClapCount = allClapsOfStory.length
    res.json({ updatedClapCount })

}))

module.exports = router;