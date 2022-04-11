'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    followerId: {
      allowNull: false,
      references: {model: 'Users'},
      type: Sequelize.INTEGER
    },
    followingId: {
      allowNull: false,
      references: {model: 'Users'},
      type: Sequelize.INTEGER
    },
  }, {});
  Follow.associate = function(models) {
    // associations can be defined here
  };
  return Follow;
};