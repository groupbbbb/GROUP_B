const models = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.chat = async (req, res) => {
  let result1 = await models.User.findOne({
    where: { userID: "user1" },
  });
  let result2 = await models.User.findAll({
    where: { userID: "user1" },
    include: [
      {
        model: models.User,
        as: "Followee_id",
      },
    ],
    raw: true,
  });
  // console.log("GET /chat result2.userID >>> ", result2);
  res.render("pages/chat", { data1: result1, data2: result2 });
};

exports.search = (req, res) => {
  models.User.findAll({
    where: {
      userID: { [Op.like]: `%${req.body.userID}%` },
    },
  }).then((result) => {
    console.log("data3 >>>>>>>>>>>>>> ", result);
    res.send(result);
  });
};
