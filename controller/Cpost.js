const models = require('../models'); 

// 전체 포스트
exports.viewPage = (req,res) => {
    models.Post.findAll().then(result => {
        res.render('pages/postView', {data:result});
    })
}

// 선택 포스트
exports.viewThis = (req,res) => {
    models.Post.findOne({
        where : {id : req.body.id}
    }).then(result => {
        console.log(result)
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


exports.like = (req,res) => {
}

exports.cancelLike = (req,res) => {
}

exports.comment = (req,res) => {
}

exports.editComment = (req,res) => {
}

exports.deleteComment = (req,res) => {
}