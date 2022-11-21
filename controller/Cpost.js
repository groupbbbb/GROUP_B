const models = require('../models'); 

// 전체 포스트 보기
exports.viewPage = (req,res) => {
    models.Post.findAll().then(result => {
        res.render('pages/postView', {data:result});
    })
}

// 선택한 포스트 보기
exports.viewThisPost = (req,res) => {
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
    if(req.file){
        models.Post.create({
            user_id : req.body.user_id,
            content : req.body.content,
            img_src : req.file.path,
        })
    }else{
        models.Post.create({
            user_id : req.body.user_id,
            content : req.body.content,
        })
    }
}

// 포스트 삭제
exports.deletePost = (req,res) => {
    models.Post.destroy({
        where : {id : req.body.id}
    })
}

// 포스트 수정
exports.editPost = (req,res) => {
    models.Post.update(
        {content : req.body.content},
        {where : {id : req.body.id}}
    ).then(res => {
        // res.send('수정 성공');
    })
}

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

exports.like = (req,res) => {
}

exports.cancelLike = (req,res) => {
}
