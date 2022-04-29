var express = require("express");
var router = express.Router();
const { asyncHandler, assignDaysAgo, getFollowerCount } = require("./utils");
const { restoreUser, requireAuth } = require('../auth')
const {validationResult} = require('express-validator')

const db = require("../db/models");
const { csrfProtection, splashPageQueries, assignStoryDate, assignReadTime, getRecommended } = require('./utils');
const {storyValidators} = require('./validators')

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
    const comments = story.Comments.reverse();

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
        where: {storyId}
    })
    const allClapsOfStoryCount = allClapsOfStory.length

    let follows = false;
    const followCheck = await db.Follow.findAll({
        where: { 
          followerId: userId,
          followingId: story.User.id
         },
      })   
    if(followCheck.length) follows = true; 

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
        where: {storyId}
    })
    updatedClapCount = allClapsOfStory.length
    res.json({updatedClapCount})

}))

router.delete('/stories/:storyId(\\d+)', restoreUser, requireAuth, asyncHandler(async(req, res) => {
    const storyId = req.params.storyId;
    const userId = req.session.auth.userId;

    const story = await db.Story.findByPk(storyId, {
        include: [db.User]
    });

    const hasPermissions = story.User.id === parseInt(userId)

    if (hasPermissions) {
        story.destroy();
        res.json({message: `${storyId} deleted.`})
    } else {
        res.status(403)
        res.json({message: 'not authorized'})
    }
}))

router.get('/stories/:storyId(\\d+)/edit', csrfProtection, restoreUser, requireAuth, asyncHandler(async(req, res) => {
    
    const storyId = req.params.storyId;
    const userId = req.session.auth.userId;

    const story = await db.Story.findByPk(storyId, {
        include: [db.User, db.Tag]
    });
    const editing = true;

    const hasPermissions = story.User.id === parseInt(userId)

    if (!hasPermissions) {
        res.redirect('/')
    } else {
        res.render('new-story', {
            story,
            editing,
            csrfToken: req.csrfToken()
        })
    }
}))

router.post('/stories/:storyId(\\d+)/edit', storyValidators, csrfProtection, restoreUser, requireAuth, asyncHandler(async(req, res) => {

    const storyId = req.params.storyId;
    const userId = req.session.auth.userId;

    const story = await db.Story.findByPk(storyId, {
        include: [db.User]
    });

    const hasPermissions = story.User.id === parseInt(userId)

    if (hasPermissions) {
        const { title, article, tag } = req.body;
        const validationErrors = validationResult(req);
        if (validationErrors.isEmpty()) {
            let tagId;
            const tagExists = await db.Tag.findOne({
              where: { name: tag },
            });
            if (tagExists) {
              tagId = tagExists.id;
            } else {
              const newTag = await db.Tag.create({
                name: tag,
              });
              tagId = newTag.id;
            }
      
            const state = "published";
            story.title = title;
            story.article = article;
            story.tagId = tagId;
            story.state = state;
      
            await story.save();
            res.redirect("/");
        } else {
            const errors = validationErrors.array().map((error) => error.msg);
            res.render("new-story", {
              user,
              story,
              errors,
              csrfToken: req.csrfToken(),
            });
          }
    } else {
        res.status(403)
        res.redirect("/");
    }

}))
module.exports = router;