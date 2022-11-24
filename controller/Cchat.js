const models = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.chat = async (req, res) => {
  let result1 = await models.User.findOne({
    where: { userID: "user1" },
  });
  res.render("pages/chat", {
    isLogin: req.session.user,
    data1: result1,
  });
};

exports.search = (req, res) => {
  models.User.findAll({
    where: {
      userID: { [Op.like]: `%${req.body.userID}%` },
    },
  }).then((result) => {
    res.send(result);
  });
};

exports.check = (req, res) => {
  models.User.findOne({
    where: {
      userID: req.body.checkID,
    },
  }).then((result) => {
    res.send(result);
  });
};
