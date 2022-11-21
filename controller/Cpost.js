// 참고용 코드
// const models = require('../models'); 

// exports.main = (req,res) => {
//     res.render('index');
// };

// exports.signin = (req,res) => {
//     res.render('signin');
// };

// exports.signup = (req,res) => {
//     res.render('signup');
// };

// exports.postSignup = (req,res) => {
//     models.User.create({
//         userid : req.body.userid,
//         name : req.body.name,
//         pw : req.body.pw,
//     }).then(result => {
//         console.log("## controller > CUser.js - postSignup : ",result)
//         res.send({
//             userid:req.body.userid,
//             name:req.body.name, 
//             pw:req.body.pw,
//         });
//     })
// };

// exports.postSignin = (req, res) => {
//     models.User.findOne({
//         where : {userid : req.body.userid, pw : req.body.pw}
//     }).then(result => {
//         console.log("## controller > CUser.js - postSignin : ",result)
//         res.send(result);
//     })

// }

// exports.postProfile = (req,res) => {
//     models.User.findOne({
//         where : {userid : req.body.userid}
//     }).then(result => {
//         console.log("## controller > CUser.js - postProfile : ",result)
//         res.render('profile',{data:result});
//     })
// }

// exports.patchProfile = (req,res) => {
//     models.User.update(
//         {
//             pw : req.body.pw,
//             name : req.body.name
//         },
//         {
//             where : {id : req.body.id}
//         }
//     ).then(result => {
//         res.send(true);
//     })
// }

// exports.deleteProfile = (req,res) => {
//     models.User.destroy({
//         where : {id : req.body.id}
//     }).then(result => {
//         res.send(true);
//     })
// }


// ==================================================================================================

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