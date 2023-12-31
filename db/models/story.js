 
const { DataTypes } = require("sequelize");
const initStory= (sequelize) =>
  sequelize.define(
    "Story",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",  
          key: "id",
        }
      },
      genreId: {
        type: DataTypes.INTEGER,
        references: {
          model: "genres",  
          key: "id",
        }
      },
      ageId: {
        type: DataTypes.INTEGER,
        references: {
          model: "ages",  
          key: "id",
        }
      },
      title: {
        type: DataTypes.TEXT
      },   
      coverUrl:{
        type:DataTypes.STRING
      }  ,        
      createdAt: {
        
        type: DataTypes.DATE
      },
      updatedAt: {
        
        type: DataTypes.DATE
      } 
     
      
       
    },
    {
      underscored: true,
    }
  );

  
module.exports = initStory;
