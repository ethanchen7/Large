'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Stories', [
     {
     title: 'lorem ipsum first article',
     article: 'very short very concise article',
     tagId: 1,
     userId: 1,
     state: 'published',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      title: 'lorem ipsum second article',
      article: 'very short very concise article about lorem ipsum part 2 ',
      tagId: 4,
      userId: 2,
      state: 'published',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'lorem ipsum third article',
      article: 'i am writing an article about the tag id of 7.. very informative stuff',
      tagId: 7,
      userId: 1,
      state: 'published',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Stories', null, {});
  }
};
