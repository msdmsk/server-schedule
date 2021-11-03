'use strict';
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    name: DataTypes.STRING,
  }, {
    underscored: true,
  });
  group.associate = function(models) {
    group.hasMany(models.users_groups,{foreignKey:"group_id"});
    group.hasMany(models.schedule,{foreignKey:"group_id"});
  };
  return group;
};