'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Follows';
    return queryInterface.bulkInsert(options, [
      { followerId: 39, followingId: 1, createdAt: new Date(), updatedAt: new Date() },
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
    options.tableName = 'Follows';
    return queryInterface.bulkDelete(options, null, {});
  }
};
