'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Tags';
    return queryInterface.bulkInsert(options,
      [
        { name: 'Tech', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Food', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Science', createdAt: new Date(), updatedAt: new Date() },
        { name: 'History', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Religion', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Funny', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Social Media', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Current Events', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Romance', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Productivity', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Data Science', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Javascript', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Health', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Politics', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Machine Learning', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Cooking', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Finance', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Crypto', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Start Up', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Tags';
    return queryInterface.bulkDelete(options);
  }
};
