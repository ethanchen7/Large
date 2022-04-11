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
      {name: 'Advice', createdAt: new Date(), updatedAt: new Date()},
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
