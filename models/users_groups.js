'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_groups = sequelize.define('users_groups', {
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  users_groups.associate = function(models) {
    users_groups.belongsTo(models.group,{foreignKey:"group_id"});
    users_groups.belongsTo(models.user,{foreignKey:"user_id"});
  };
  return users_groups;
};

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Users_Groups extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       users_groups.belongsTo(models.group,{foreignKey:"group_id"});
//       users_groups.belongsTo(models.user,{foreignKey:"user_id"});
//     }
//   };
//   Users_Groups.init({
//     user_id: DataTypes.INTEGER,
//     group_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Users_Groups',
//     underscored: true,
//   });
//   return Users_Groups;
// };