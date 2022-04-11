'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      type:DataTypes.STRING(50),
      unique: true,
      allowNull: false}
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here

    const columnMapping = {
      through: 'UserTag',
      otherKey: 'userId',
      foreignKey: 'tagId'
    }
    Tag.belongsToMany(models.User, columnMapping)
    Tag.hasMany(models.Story, {foreignKey: 'tagId'})
  };
  return Tag;
};