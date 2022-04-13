const db = require('../db/models');

const csrf = require("csurf");

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const splashPageQueries = async () => {
  const user = db.User.build();
  const stories = await db.Story.findAll({
    include: [db.User, db.Tag],
    order: [['createdAt', 'ASC']],
  });

  const tags = await db.Tag.findAll({
    order: [['createdAt', 'ASC']],
    limit: 9,
  });

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
  stories.forEach(story => {
    const monthIndex = story.updatedAt.getMonth();
    const month = months[monthIndex];

    story.date = `${month} ${story.updatedAt.getDate().toString()}`

    const article = story.article;
    const articleWords = article.split(' ');
    const blurb = articleWords.slice(0, 15).join(' ');
    story.blurb = blurb;
    story.readTime = Math.max(1, Math.floor(articleWords.length / 250))

  })
  let newStories = []
  for (let i = 0; i < 6; i++) {
    let story = stories.shift();
    newStories.push(story);
  }
  return { user, stories, newStories, tags }
}


const followingArticles = async(req, res) => {
  
  // const user = req.session.auth;
  const user = req.session.auth;
  console.log('yeeeeee', user.userId)

  const stories = await db.Story.findAll({
    include: [db.User, db.Tag],
    order: [['createdAt', 'ASC']],
  });

  const following = await db.Follow.findAll({
    where: {followerId: user.userId }
  })

  const followingArr = following.map(follow =>{
    return follow.followingId
  })

  const followingStories = stories.filter(story => {
    return (followingArr.indexOf(story.User.id) !== -1)
  })

  const tags = await db.Tag.findAll({
    order: [['createdAt', 'ASC']],
    limit: 9,
  });

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
  followingStories.forEach(story => {
    const monthIndex = story.updatedAt.getMonth();
    const month = months[monthIndex];

    story.date = `${month} ${story.updatedAt.getDate().toString()}`

    const article = story.article;
    const articleWords = article.split(' ');
    const blurb = articleWords.slice(0, 15).join(' ');
    story.blurb = blurb;
    story.readTime = Math.max(1, Math.floor(articleWords.length / 250))

  })
  
  return { user, followingStories, tags }

}



module.exports = {
  csrfProtection,
  asyncHandler,
  splashPageQueries,
  followingArticles,
};
