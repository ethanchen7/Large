"use strict";
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define(
    "Follow",
    {
      followerId: {
        allowNull: false,
        references: { model: "Users" },
        type: sequelize.INTEGER,
      },
      followingId: {
        allowNull: false,
        references: { model: "Users" },
        type: sequelize.INTEGER,
      },
    },
    {}
  );
  Follow.associate = function (models) {
    // associations can be defined here
  };
  return Follow;
};
