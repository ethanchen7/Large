'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: {
      allowNull: false,
      type: Sequelize.STRING
    },
    userId: {
      allowNull: false,
      references: {model: 'Users'},
      type: Sequelize.INTEGER
    },
    storyId: {
      allowNull: false,
      references: {model: 'Stories'},
      type: Sequelize.INTEGER
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {foreignKey: 'userId'})
    Comment.belongsTo(models.Story, {foreignKey: 'storyId'})
  };
  return Comment;
};