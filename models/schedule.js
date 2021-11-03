'use strict';
module.exports = (sequelize, DataTypes) => {
  const schedule = sequelize.define('schedule', {
    user_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
    todo: DataTypes.STRING,
    group_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  schedule.associate = function(models) {
    schedule.belongsTo(models.group,{foreignKey:"group_id"});
    schedule.belongsTo(models.user,{foreignKey:"user_id"});
  };
  return schedule;
};

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Schedule extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       schedule.belongsTo(models.group,{foreignKey:"group_id"});
//       schedule.belongsTo(models.user,{foreignKey:"user_id"});
//     }
//   };
//   Schedule.init({
//     user_id: DataTypes.INTEGER,
//     date: DataTypes.STRING,
//     todo: DataTypes.STRING,
//     group_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Schedule',
//     underscored: true,
//   });
//   return Schedule;
// };