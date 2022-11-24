const Participant = function (Sequelize, DataTypes) {
  const participant = Sequelize.define(
    "participant",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "participant",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return participant;
};

module.exports = Participant;
