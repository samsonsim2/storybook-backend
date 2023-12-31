"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usercollabs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"users",
          key:"id"
        }
      },
      collab_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"collabs",
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usercollabs");
  },
};
