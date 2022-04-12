'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Tags', 
    [
      {name: 'Tech', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Food', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Science', createdAt: new Date(), updatedAt: new Date()},
      {name: 'History', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Religion', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Funny', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Social Media', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Current Events', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Romance', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Productivity', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Data Science', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Javascript', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Health', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Politics', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Machine Learning', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Cooking', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Finance', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Crypto', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Start Up', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
