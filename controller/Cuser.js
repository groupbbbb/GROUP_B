const models = require('../models');

exports.signup = (req, res) => {
  res.render('pages/signup', {isLogin: req.session.user});
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
  res.render('pages/signin', {isLogin: req.session.user});
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
      req.session.user = req.body.userID;
      req.session.user_id = result.dataValues.id;
      res.send({isLogin: req.session.user, id: result.dataValues.id});
    }
  });
};

exports.mypage = (req, res) => {
  res.render('pages/mypage', {isLogin: req.session.user});
};

exports.signout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
    res.redirect('/pages/mainpage');
  })
};





