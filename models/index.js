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

db.User = require("./User")(sequelize, Sequelize);
db.Post = require("./Post")(sequelize, Sequelize);
db.Likes = require("./Likes")(sequelize, Sequelize);
db.Comment = require("./Comment")(sequelize, Sequelize);

db.Post.hasMany(db.Likes, { foreignKey: "post_id" });
db.Likes.belongsTo(db.Post, { foreignKey: "post_id" });
db.Post.hasMany(db.Comment, { foreignKey: "post_id" });
db.Comment.belongsTo(db.Post, { foreignKey: "post_id" });
db.User.hasMany(db.Post, { foreignKey: "user_id" });
db.Post.belongsTo(db.User, { foreignKey: "user_id" });
db.User.hasMany(db.Likes, { foreignKey: "user_id" });
db.Likes.belongsTo(db.User, { foreignKey: "user_id" });
db.User.hasMany(db.Comment, { foreignKey: "user_id" });
db.Comment.belongsTo(db.User, { foreignKey: "user_id" });

module.exports = db;
