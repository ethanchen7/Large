'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Stories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      article: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tagId: {
        allowNull: false,
        references: {model: 'Tags'},
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        references: {model: 'Users'},
        type: Sequelize.INTEGER
      },
      state: {
        allowNull: false,
        defaultValue: 'draft',
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Stories');
  }
};