'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTag = sequelize.define('UserTag', {
  userId: {
    allowNull: false,
    references: {model: 'Users'},
    type: Sequelize.INTEGER
  },
  tagId: {
    allowNull: false,
    references: {model: 'Tags'},
    type: Sequelize.INTEGER
  },
  }, {});
  UserTag.associate = function(models) {
    // associations can be defined here
  };
  return UserTag;
};