'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
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
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
    Story.belongsTo(models.Tag, {foreignKey: 'tagId'})
    Story.belongsTo(models.User, {foreignKey: 'userId'})
    Story.hasMany(models.Comment, {foreignKey: 'storyId'})
    Story.hasMany(models.StoryClap, {foreignKey: 'storyId'})
  };
  return Story;
};