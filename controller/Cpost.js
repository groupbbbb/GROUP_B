
const models = require('../models'); 


// =========================================  포스트  =========================================
exports.main = (req, res) => {
    const user = req.session.user;
    const user_id = req.session.user_id;
    if (user !== undefined) {
        models.Post.findAll({
            order: [['id', 'DESC']],
            include: [
                {
                    model: models.Likes,
                },
                {
                    model: models.User,
                },
                {
                    model: models.Comment,
                    include: [{
                        model: models.User,
                        attributes : ['userID'],
                    }]
                }
            ]
        }).then(result => {
            res.render("pages/mainpage", { data:result, isLogin: req.session.user, user: user, user_id:user_id });
        })
    } else {
        models.Post.findAll({
            order: [['id', 'DESC']],
            include: [
                {
                    model: models.Likes,
                },
                {
                    model: models.User,
                },
                {
                    model: models.Comment,
                    include: [{
                        model: models.User,
                        attributes : ['userID'],
                    }]
                }
            ],
        }).then(result => {
            res.render("pages/mainpage", { data:result, isLogin: false });
        })
    }
}


// 전체 포스트 보기
exports.viewPage = (req,res) => {
    models.Post.findAll({
        order: [['id', 'DESC']],
        include: [
            {
                model:  models.Likes,
            },
            {
                model: models.User,
            }
        ]
      }).then(result => {
        res.render('pages/postView', {data:result});
      })
}

// 선택한 포스트 보기
exports.viewThisPost = (req,res) => {
    const user_id = req.session.user_id;
    models.Post.findOne({
        where : {id : req.body.id},
        include: [
            {
                model:  models.Likes,
            },
            {
                model : models.User,
            },
            {
                model : models.Comment,
                include: [{
                    model: models.User,
                    attributes : ['userID'],
                }]
            }
        ]
    }).then(result => {
        res.send(result);
    })
}

// 포스트 업로드 페이지
exports.uploadPage = (req,res) => {
    res.render('pages/postUpload', {isLogin: req.session.user});
};

// 포스트 업로드
exports.uploadPost = (req,res) => {
    const user_id = req.session.user_id;

    let imgSrc='';
    for (let i = 0; i < req.files.length; i++) {
        imgSrc += (req.files[i].path + "~!@#");
    }

    if (user_id) {
        models.Post.create({
            user_id: user_id,
            content: req.body.content,
            img_src: imgSrc,
        }).then(result => {
            res.send('게시글 업로드 성공');
        })
    } else {
        res.send('로그인 하세요');
    }
}

// 포스트 삭제
exports.deletePost = (req,res) => {
    const user_id = req.session.user_id;
    if(!user_id){
        res.send('로그인 하세요');
    }else if(req.body.user_id==user_id){
        models.Post.destroy(
            {where : {id : req.body.id}}
        ).then(result => {
            res.send('게시글 삭제 성공');
        })
    }else{
        res.send('회원정보 불일치');
    }
}

// 포스트 수정 세션 체크
exports.editPostSessionCheck = (req,res) => {
    const user_id = req.session.user_id;
    if(!user_id){
        res.send('로그인 하세요');
    }else if(user_id==req.body.user_id){
        res.send(true);
    }else{
        res.send('회원정보 불일치');
    }
}

// 포스트 수정
exports.editPost = (req,res) => {
    models.Post.update(
        {content : req.body.content},
        {where : {id : req.body.id}}
    ).then(result => 
        {res.send('게시글 수정 성공');})
}


// =========================================  댓글  =========================================

// 댓글 전체 보기
exports.viewComment = (req,res) => {
    models.Comment.findAll({
        where : {post_id : req.body.id},
        include: [
            {
                model: models.User,
            }
        ]
    }).then(result => {
        res.send(result);
    })
}

// 댓글 하나 선택
exports.viewThisComment = (req,res) => {
    models.Comment.findOne({
        where : {id : req.body.id}
    }).then(result => {
        res.send(result);
    })
}

// 댓글 등록
exports.uploadComment = (req,res) => {
    const user_id = req.session.user_id;
    if(!user_id){
        res.send('로그인 하세요');
    }else if(user_id){
        models.Comment.create({
            content : req.body.content,
            post_id : req.body.post_id,
            user_id : user_id,
        }).then(result=>{
            res.send('댓글 등록 완료');
        })
    }else{
        res.send('로그인 하세요');
    }
}

// 댓글 삭제
exports.deleteComment = (req,res) => {
    const user_id = req.session.user_id;
    if(!user_id){
        res.send('로그인 하세요');
    }else if(user_id == req.body.user_id){
        models.Comment.destroy({
            where : {id : req.body.id}
        }).then((result)=>{
            res.send('댓글 삭제 성공');
        })
    }else{
        res.send('회원정보 불일치');
    }
}

// 댓글 수정 세션 체크
exports.editCommentSessionCheck = (req,res) => {
    const user_id = req.session.user_id;
    if(!user_id){
        res.send('로그인 하세요');
    }else if(user_id==req.body.user_id){
        res.send(true);
    }else{
        res.send('회원정보 불일치');
    }
}

// 댓글 수정
exports.editComment = (req,res) => {
    models.Comment.update(
        {content : req.body.content},
        {where : {id : req.body.id}}
    ).then((result)=>{
        res.send('댓글 수정 성공');
    })
}

// =========================================  좋아요  =========================================

// 좋아요 조회
exports.viewLike = (req,res) => {
}


// 선택 게시글 좋아요 조회
exports.viewThisLike = (req,res) => {
    models.Post.findOne({
        where: { id: req.body.id },
        include: [
            {
             model:  models.Likes,
             include: [{
                 model: models.User
             }]
            }
        ]
    }).then((result) => {
        res.send(result);
    });
}

// 선택 게시글 좋아요했는지
exports.viewThisLiked = (req,res) => {
    const user_id = req.session.user_id;
    if(user_id){
        models.Likes.findOne({
            where : {post_id : req.body.id, user_id : user_id},
          }).then((result)=>{
            res.send(result);
        });
    }else{
        res.send('로그인 하세요');
    }
}

// 좋아요
exports.addLike = (req,res) => {
    const user_id = req.session.user_id;
    if(user_id){
        models.Likes.create({
            post_id : req.body.id, 
            user_id : user_id
        }).then((result)=>{
            res.send('좋아요 성공');
        })
    }else{
        res.send('로그인 하세요');
    }
}

// 취소
exports.removeLike = (req,res) => {
    const user_id = req.session.user_id;
    if(user_id){
        models.Likes.destroy({
            where : {
                post_id : req.body.id, 
                user_id : user_id
            }
        }).then((result)=>{
            res.send('좋아요 취소 성공');
        })
    }else{
        res.send('로그인 하세요');
    }
}