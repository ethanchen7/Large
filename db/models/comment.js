"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      text: {
        allowNull: false,
        type: sequelize.STRING,
      },
      userId: {
        allowNull: false,
        references: { model: "Users" },
        type: sequelize.INTEGER,
      },
      storyId: {
        allowNull: false,
        references: { model: "Stories" },
        type: sequelize.INTEGER,
      },
    },
    {}
  );
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Story, { foreignKey: "storyId" });
  };
  return Comment;
};
