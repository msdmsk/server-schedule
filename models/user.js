'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.users_groups,{foreignKey:"user_id"});
      user.hasMany(models.schedule,{foreignKey:"user_id"});
    }
  };
  User.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });
  return User;
};