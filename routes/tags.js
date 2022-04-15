var express = require("express");
var router = express.Router();

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler, storiesByTags } = require("./utils");

router.get('/tags/:id', asyncHandler(async(req,res, next) =>{
    const tag = req.params.id

    const tagName = await db.Tag.findByPk(tag)

    const tagStories = await storiesByTags(tag);

    const currUser = await db.User.findByPk(req.session.auth.userId)

    let doesFollowTag = await db.UserTag.findAll({
        where: {
            userId: currUser.id,
            tagId: tag
        }
    })

    if(doesFollowTag.length){
        doesFollowTag = true
    }else{
        doesFollowTag = false
    }

    const {stories} = tagStories

    res.render('tag-feed', {
        stories,
        currUser,
        tagName,
        tag,
        doesFollowTag
    })
}))

router.post('/tags/:id/follow', asyncHandler(async (req, res, next) => {
    const tag = req.params.id

    const tagName = await db.Tag.findByPk(tag)

    const user = await db.User.findByPk(req.session.auth.userId)

    const followCheck = await db.UserTag.findAll({
        where: {
            userId: user.id,
            tagId: tag
        },
    })

    if(followCheck.length){
        return
    }else{
        const newFollow = await db.UserTag.create({
            userId: user.id,
            tagId: tag
        })

        await newFollow.save()

        res.redirect('back')
    }


}))

router.delete('/tags/:id/follow', asyncHandler(async (req, res, next) => {
    const tag = req.params.id

    const tagName = await db.Tag.findByPk(tag)

    const user = await db.User.findByPk(req.session.auth.userId)

    const followCheck = await db.UserTag.findAll({
        where: {
            userId: user.id,
            tagId: tag
        },
    })

    if (!followCheck.length) {
        return
    } else {
        followCheck[0].destroy()

        res.redirect('back')
    }


}))



module.exports = router