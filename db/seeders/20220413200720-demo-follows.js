'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Follows', [
     {followerId: 39, followingId: 1, createdAt: new Date(), updatedAt: new Date() },
     { followerId: 39, followingId: 2, createdAt: new Date(), updatedAt: new Date() },
     { followerId: 39, followingId: 3, createdAt: new Date(), updatedAt: new Date() },
     { followerId: 39, followingId: 4, createdAt: new Date(), updatedAt: new Date() },
     { followerId: 39, followingId: 5, createdAt: new Date(), updatedAt: new Date() },
     { followerId: 39, followingId: 6, createdAt: new Date(), updatedAt: new Date() },
     { followerId: 39, followingId: 7, createdAt: new Date(), updatedAt: new Date() },
     { followerId: 39, followingId: 8, createdAt: new Date(), updatedAt: new Date() },
     { followerId: 39, followingId: 9, createdAt: new Date(), updatedAt: new Date() },
     { followerId: 39, followingId: 10, createdAt: new Date(), updatedAt: new Date() }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Follows', null, {});
  }
};
