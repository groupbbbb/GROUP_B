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

module.exports = Room;
module.exports = Participant;
module.exports = Msg;
