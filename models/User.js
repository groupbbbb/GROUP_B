const User = function (Sequelize, DataTypes) {
  
    return  Sequelize.define(
      'user',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        userID: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        userPW: {
            type: DataTypes.STRING(100),
            allowNull: false,
          },
        name: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        birth: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        profile_img: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
      },
      {
        tableName: 'user',
        freezeTableName: true,
        timestamps: false,
      }
    );
  
  };
  
  module.exports = User;
