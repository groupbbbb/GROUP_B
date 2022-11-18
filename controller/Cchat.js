const models = require("../models");

exports.chat = (req, res) => {
  models.User.findOne({
    where: { userID: "user1" },
  }).then((result) => {
    res.render("pages/chat", { data: result });
  });
};
