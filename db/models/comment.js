"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      text: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        references: { model: "Users" },
        type: DataTypes.INTEGER,
      },
      storyId: {
        allowNull: false,
        references: { model: "Stories" },
        type: DataTypes.INTEGER,
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
