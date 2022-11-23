"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Room = require("./Room")(sequelize, Sequelize);
db.Participant = require("./Participant")(sequelize, Sequelize);
db.Msg = require("./Msg")(sequelize, Sequelize);
// db.Follow = require("./Follow")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);
// db.Post = require("./Post")(sequelize, Sequelize);

db.User.belongsToMany(db.User, {
  through: "Follow",
  as: "Follower_id",
  foreignKey: "Followee_id",
});

db.User.belongsToMany(db.User, {
  through: "Follow",
  as: "Followee_id",
  foreignKey: "Follower_id",
});

module.exports = db;
