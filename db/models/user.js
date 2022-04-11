"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      userName: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(20),
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(100),
      },
      hashedPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
      },
      bio: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "UserTag",
      otherKey: "tagId",
      foreignKey: "userId",
    };
    User.belongsToMany(models.Tag, columnMapping);
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Story, { foreignKey: "userId" });
    User.hasMany(models.StoryClap, { foreignKey: "userId" });

    const columnMappingOne = {
      // User -> User, through Follow as follower
      through: "Follow",
      otherKey: "followingId",
      foreignKey: "followerId",
      as: "followings",
    };
    const columnMappingTwo = {
      // User -> User, through Follow as following
      through: "Follow",
      otherKey: "followerId",
      foreignKey: "followingId",
      as: "followers",
    };
    User.belongsToMany(models.User, columnMappingOne);
    User.belongsToMany(models.User, columnMappingTwo);
  };
  return User;
};
