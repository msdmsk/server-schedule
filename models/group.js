'use strict';
const { group } = require('console');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      group.hasMany(models.users_groups,{foreignKey:"group_id"});
      group.hasMany(models.schedule,{foreignKey:"group_id"});
    }
  };
  Group.init({
    group_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
    underscored: true,
  });
  return Group;
};