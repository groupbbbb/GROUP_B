const models = require('../models');

exports.signup = (req, res) => {
  res.render('pages/signup');
};

exports.post_signup = (req, res) => {
  models.User.create({
    userID: req.body.userID,
    userPW: req.body.userPW,
    name: req.body.name,
    birth: req.body.birth,
  }).then(() => {
    res.send(true);
  });
};

exports.idCheck = (req, res) => {
  models.User.findOne({
    where: {
      userID: req.body.userID,
    }
  }).then((result) => {
    if (result == null) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};


exports.signin = (req, res) => {
  res.render('pages/signin');
};

exports.post_signin = (req, res) => {
  models.User.findOne({
    where: {
      userID: req.body.userID,
      userPW: req.body.userPW,
    },
  }).then((result) => {
    if (result === null) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
};




