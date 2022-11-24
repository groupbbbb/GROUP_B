const Follow = function (Sequelize, DataTypes) {
  const follow = Sequelize.define(
    "follow",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      followee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      follower_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "follow",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return follow;
};

// Follow.belongsToMany(User, {
//   through: "user_id",
//   as: "user",
//   foreignKey: "Followee_id",
// });

module.exports = Follow;
