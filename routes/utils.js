const db = require("../db/models");

const csrf = require("csurf");

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const splashPageQueries = async () => {
  const user = db.User.build();

  const recommendedUsers = await db.User.findAll({
    order: [["createdAt", "ASC"]],
    limit: 3,
  });

  const stories = await db.Story.findAll({
    include: [db.User, db.Tag],
    order: [["createdAt", "ASC"]],
  });

  const tags = await db.Tag.findAll({
    order: [["createdAt", "ASC"]],
    limit: 9,
  });

  stories.forEach(story => {

    story.date = assignStoryDate(story); //`${month} ${story.updatedAt.getDate().toString()}`
    story.readTime = assignReadTime(story);

  })
  let newStories = []
  for (let i = 0; i < 6; i++) {
    let story = stories.shift();
    newStories.push(story);
  }
  return { user, recommendedUsers, stories, newStories, tags };
};


const assignStoryDate = (story) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]

  const monthIndex = story.updatedAt.getMonth();
  const month = months[monthIndex];

  return `${month} ${story.updatedAt.getDate().toString()}`
}

const assignReadTime = (story) => {
  const article = story.article;
  const articleWords = article.split(' ');
  const blurb = articleWords.slice(0, 15).join(' ');
  story.blurb = blurb;
  return Math.max(1, Math.floor(articleWords.length / 250))
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
  
  followingStories.forEach(story => {

    story.date = assignStoryDate(story); //`${month} ${story.updatedAt.getDate().toString()}`
    story.readTime = assignReadTime(story);

  })

  const tags = await db.Tag.findAll({
    order: [['createdAt', 'ASC']],
    limit: 9,
  });
  
  return { user, followingStories, tags }

}

const storiesByTags = async(tag) => {
  const stories = await db.Story.findAll({
    include: [db.User, db.Tag],
    order: [['createdAt', 'ASC']],
    where: { tagId: `${tag}` }
  })
  
  stories.forEach(story => {

    story.date = assignStoryDate(story); //`${month} ${story.updatedAt.getDate().toString()}`
    story.readTime = assignReadTime(story);

  })

  console.log(stories)
  return { stories }
}


module.exports = {
  csrfProtection,
  asyncHandler,
  splashPageQueries,
  assignStoryDate,
  assignReadTime,
  followingArticles,
  storiesByTags,
};
