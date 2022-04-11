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
      {name: 'Tech'},
      {name: 'Food'},
      {name: 'Science'},
      {name: 'History'},
      {name: 'Religion'},
      {name: 'Funny'},
      {name: 'Social Media'},
      {name: 'Current Events'},
      {name: 'Romance'},
      {name: 'Advice'},
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
