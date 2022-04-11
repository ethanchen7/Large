"use strict";
module.exports = (sequelize, DataTypes) => {
  const StoryClap = sequelize.define(
    "StoryClap",
    {
      storyId: {
        allowNull: false,
        reference: { model: "Stories" },
        type: sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        reference: { model: "Users" },
        type: sequelize.INTEGER,
      },
    },
    {}
  );
  StoryClap.associate = function (models) {
    // associations can be defined here
    StoryClap.belongsTo(models.User, { foreignKey: "userId" });
    StoryClap.belongsTo(models.Story, { foreignKey: "storyId" });
  };
  return StoryClap;
};
