const Room = function (Sequelize, DataTypes) {
  const room = Sequelize.define(
    "room",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      tableName: "room",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return room;
};

module.exports = Room;
