const models = require('../models'); 


// =========================================  포스트  =========================================

// 전체 포스트 보기
exports.viewPage = (req,res) => {
    models.Post.findAll().then(result => {
        res.render('pages/postView', {data:result});
    })
}

// 선택한 포스트 보기
exports.viewThisPost = (req,res) => {
    const user_id = req.session.user_id;
    models.Post.findOne({
        where : {id : req.body.id}
    }).then(result => {
        res.send(result);
    })
}

// 포스트 업로드 페이지
exports.uploadPage = (req,res) => {
    res.render('pages/postUpload');
};

// 포스트 업로드
exports.uploadPost = (req,res) => {
    const user_id = req.session.user_id;
    if(user_id){
        if(req.file){
            models.Post.create({
                user_id : user_id,
                content : req.body.content,
                img_src : req.file.path,
            }).then(result => {
                res.send('업로드 성공');
            })
        }else{
            models.Post.create({
                user_id : user_id,
                content : req.body.content,
            }).then(result => {
                res.send('업로드 성공');
            })
        }
    }else{
        res.send('로그인 하세요');
    }
}

// 포스트 삭제
exports.deletePost = (req,res) => {
    const user_id = req.session.user_id;
    if(req.body.user_id==user_id){
        models.Post.destroy(
            {where : {id : req.body.id}}
        ).then(result => {
            res.send('삭제 성공');
        })
    }else{
        res.send('삭제 실패 (로그인 유저와 게시자가 일치하지 않음)');
    }
}

// 수정 포스트 선택
exports.editPostSessionCheck = (req,res) => {
    const user_id = req.session.user_id;
    if(user_id==req.body.user_id){
        res.send(true);
    }else{
        res.send(false);
    }
}

// 포스트 수정
exports.editPost = (req,res) => {
    const user_id = req.session.user_id;
    if(req.body.user_id==user_id){
        models.Post.update(
            {content : req.body.content},
            {where : {id : req.body.id}}
        ).then(result => {
            res.send('수정 성공');
        })
    }else{
        res.send('수정 실패 (로그인 유저와 게시자가 일치하지 않음)')
    }
}


// =========================================  댓글  =========================================

// 댓글 전체 보기
exports.viewComment = (req,res) => {
    models.Comment.findAll({
        where : {post_id : req.body.id}
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
    models.Comment.create({
        content : req.body.content,
        post_id : req.body.post_id,
        user_id : req.body.user_id
    })
}

// 댓글 수정
exports.editComment = (req,res) => {
    models.Comment.update(
        {content : req.body.content},
        {where : {id : req.body.id}}
    )
}

// 댓글 삭제
exports.deleteComment = (req,res) => {
    models.Comment.destroy({
        where : {id : req.body.id}
    })
}


// =========================================  좋아요  =========================================

// 좋아요
exports.like = (req,res) => {
}
// 취소
exports.cancelLike = (req,res) => {
}
