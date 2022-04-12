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

  // let newStories = []
  // for (let i = 0; i < 6; i++) {
  //   let story = stories.unshift();
  //   newStories.push(story);
  // }

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
  })
  return {user, stories, tags}
}

module.exports = {
  csrfProtection,
  asyncHandler,
  splashPageQueries,
};
