const models = require('../models');

exports.signup = (req, res) => {
  res.render('pages/signup', {isLogin: req.session.user});
};
//======회원가입======
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
//======아이디중복체크======
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
//======로그인======
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
  const user_id = req.session.user_id;
  let likeData;
  let postData;
  
  models.Post.findAll({
    where:{user_id:user_id},
    order: [['id', 'DESC']],
    include: [
      {
        model: models.Likes, attributes:['user_id'],
        include : [{model:models.User, attributes:['userID']}]
      },
      {
        model: models.Comment, attributes:['user_id','content','createdAt'],
        include : [{model:models.User, attributes:['userID']}]
      }
    ]
  }).then(result => {
    postData=result;
    models.Likes.findAll({
      where:{user_id:user_id},
      order: [['id', 'DESC']],
      include: [
        {
          model: models.Post,
          include :[
            { model : models.User, attributes:['userID']},
            {
              model: models.Likes, attributes:['user_id'],
              include : [{model:models.User, attributes:['userID']}]
            },
            {
              model: models.Comment, attributes:['user_id','content','createdAt'],
              include : [{model:models.User, attributes:['userID']}]
            }
          ]
        }
      ]
    }).then(result => {
      res.render('pages/mypage', { isLogin: req.session.user, postData:postData, likeData:result, user_id:req.session.user_id });
    })
  })
  // res.render('pages/mypage', {isLogin: req.session.user});
};



//======로그아웃======
exports.signout = (req, res) => {
  req.session.destroy(function(){
  });
  res.render('pages/mypage', {isLogin:false});
};
//======user정보받아오기======
exports.getMyInform = (req, res) => {
  models.User.findOne({
    where: {
      userID: req.body.isLogin
    },
  }).then((result) => {
   res.send({userID:result.dataValues.userID, userPW:result.dataValues.userPW, name:result.dataValues.name,
    birth:result.dataValues.birth, profile_img:result.dataValues.profile_img});
  });
}
//======user정보변경======
exports.modifyUserInform = (req, res) => {
  models.User.update(
    {
      userPW: req.body.userPW,
      name: req.body.name,
      birth: req.body.birth,
    },
    {
      where: { userID: req.body.isLogin },
    }
  ).then(() => {
    res.send(true);
  });
}
//======프로필사진변경======
exports.profileUploads = (req, res) => {
  models.User.update(
    {
      profile_img: req.file.path,
    },
    {
      where: { userID: req.body.isLogin },
    }
  ).then((result) => {
    console.log(result);
    res.send(result);
  });
}
//======user비밀번호변경======
exports.modifyPW = (req, res) => {
  models.User.update(
    {
      userPW: req.body.newPW,
    },
    {
      where: { userID: req.body.isLogin },
    }
  ).then(() => {
    res.send(true);
  });
}

//============================================================================================
// 좋아요 목록 보기



exports.getMyLike=(req,res)=>{
  const user_id = req.session.user_id;
  if(user_id){
    models.Likes.findAll({
      where:{user_id:user_id},
      order: [['id', 'DESC']],
      include: [
        {
          model: models.Post,
          include :[
            { model : models.User, attributes:['userID']},
            {
              model: models.Likes, attributes:['user_id'],
              include : [{model:models.User, attributes:['userID']}]
            },
            {
              model: models.Comment, attributes:['user_id','content','createdAt'],
              include : [{model:models.User, attributes:['userID']}]
            }
          ]
        }
      ]
    }).then(result => {
      res.send({ data: result });
    })
  }
}


exports.getMyPost = (req, res) => {
  const user_id = req.session.user_id;
  if(user_id){
    models.Post.findAll({
      where:{user_id:user_id},
      order: [['id', 'DESC']],
      include: [
        {
          model: models.Likes, attributes:['user_id'],
          include : [{model:models.User, attributes:['userID']}]
        },
        {
          model: models.Comment, attributes:['user_id','content','createdAt'],
          include : [{model:models.User, attributes:['userID']}]
        }
      ]
    }).then(result => {
      res.send({ data: result });
    })
  }
}


exports.deleteMyPost = (req, res) => {
  models.Post.destroy({
    where : {id:req.body.id}
  }).then(result=>{
    res.send('게시글 삭제 성공');
  })
}

exports.editMyPost = (req,res) => {
  models.Post.update(
      {content : req.body.content},
      {where : {id : req.body.id}}
  ).then((result)=>{
      res.send('게시글 수정 성공');
  })
}

exports.deleteMyLike = (req, res) => {
  models.Likes.destroy({
    where : {id:req.body.id}
  }).then(result=>{
    res.send('좋아요를 취소했습니다.');
  })
}