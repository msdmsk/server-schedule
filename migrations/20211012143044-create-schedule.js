'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Users",
          key:"id"
         }
      },
      date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      todo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      group_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:"Groups",
          key:"id"
         }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schedules');
  }
};