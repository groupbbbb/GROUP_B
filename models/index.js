'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.Chat = require('./Chat')(sequelize, Sequelize);
db.User = require('./User')(sequelize, Sequelize);
db.Post = require('./Post')(sequelize, Sequelize);
db.Likes = require('./Likes')(sequelize, Sequelize);
db.Comment = require('./Comment')(sequelize, Sequelize);


db.Post.hasMany(db.Likes,{foreignKey: 'post_id'});
db.Likes.belongsTo(db.Post,{foreignKey: 'post_id'});

db.User.hasMany(db.Post,{foreignKey: 'user_id'});
db.Post.belongsTo(db.User,{foreignKey: 'user_id'});

db.User.hasMany(db.Likes,{foreignKey: 'user_id'});
db.Likes.belongsTo(db.User,{foreignKey: 'user_id'});

// db.Post.belongsToMany(db.User, {
//   through: "user-post",
//   as: "post_id",
//   foreignKey: "id",
// });

// db.User.belongsToMany(db.Post, {
//   through: "user-post",
//   as: "user_id",
//   foreignKey: "id",
// });

// db.User.belongsToMany(db.User, {
//   through: "Follow",
//   as: "Follower_id",
//   foreignKey: "Follower_id",
// });

// db.User.belongsToMany(db.User, {
//   through: "Follow",
//   as: "Followee_id",
//   foreignKey: "Followee_id",
// });

module.exports = db;
