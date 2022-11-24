const Msg = function (Sequelize, DataTypes) {
  const msg = Sequelize.define(
    "msg",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      participant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "msg",
      freezeTableName: true,
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  return msg;
};

module.exports = Msg;
