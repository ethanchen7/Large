"use strict";
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define(
    "Follow",
    {
      followerId: {
        allowNull: false,
        references: { model: "Users" },
        type: DataTypes.INTEGER,
      },
      followingId: {
        allowNull: false,
        references: { model: "Users" },
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Follow.associate = function (models) {
    // associations can be defined here
  };
  return Follow;
};
