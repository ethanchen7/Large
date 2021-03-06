const db = require("../db/models");

const csrf = require("csurf");

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const splashPageQueries = async () => {
  const user = db.User.build();

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
  return { user, stories, newStories, tags };
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


const followingArticles = async (req, res) => {

  // const user = req.session.auth;
  const user = req.session.auth;

  const stories = await db.Story.findAll({
    include: [db.User, db.Tag],
    order: [['createdAt', 'ASC']],
  });

  const following = await db.Follow.findAll({
    where: { followerId: user.userId }
  })

  const followingArr = following.map(follow => {
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

const storiesByTags = async (tag) => {
  const stories = await db.Story.findAll({
    include: [db.User, db.Tag],
    order: [['createdAt', 'ASC']],
    where: { tagId: `${tag}` }
  })

  stories.forEach(story => {

    story.date = assignStoryDate(story); //`${month} ${story.updatedAt.getDate().toString()}`
    story.readTime = assignReadTime(story);

  })

  return { stories }
}


const assignDaysAgo = async (comment) => {
  const today = new Date();

  const postDate = comment.updatedAt;

  const difference = today.getTime() - postDate.getTime();

  let daysAgo = Math.floor(difference / (1000 * 3600 * 24));

  if (daysAgo >= 1) comment.daysAgo = `${daysAgo} days ago`
  else comment.daysAgo = "Posted today"
}


const getRecommended = async (userId) => {
  const recommendedUsers = await db.User.findAll({
    order: [["createdAt", "ASC"]],
  });

  const following = await db.Follow.findAll({
    where: { followerId: userId }
  })

  const followingArr = following.map(follow => {
    return follow.followingId
  })

  let nonFollowedAccounts = recommendedUsers.filter(user1 => {
    return (followingArr.indexOf(user1.id) === -1)
  })

  nonFollowedAccounts = nonFollowedAccounts.splice(0, 3)

  return nonFollowedAccounts

}

const getFollowerCount = async (user) => {
  const follows = await db.Follow.findAll({
    where: {
      followingId: user.id
    }
  })
  return follows.length
}




module.exports = {
  csrfProtection,
  asyncHandler,
  splashPageQueries,
  assignStoryDate,
  assignReadTime,
  followingArticles,
  storiesByTags,
  assignDaysAgo,
  getRecommended,
  getFollowerCount,
};
