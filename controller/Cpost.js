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


// exports.postView = (req,res) => {
//     models.Post.findAll().then(result => {
//         res.render('pages/postView', {data:result});
//     })
// }

exports.postView = (req,res) => {
    models.Post.findAll().then(result => {
        res.render('pages/postView', {data:result});
    })
}

exports.Upload = (req,res) => {
    res.render('pages/postUpload');
};


// exports.postUpload = (req,res) => {
//     console.log("#### postUpload req.body >> ", req);

    // models.Post.create({
    //     user_id : req.body.user_id,
    //     content : req.body.content,
    //     img : req.body.img,
    // }).then(result => {
    //     res.send({
    //         user_id : req.body.user_id,
    //         content : req.body.content,
    //         img : req.body.img,
    //     });
    // })
// }

exports.postUpload = (req,res) => {
    console.log('===============================================');
    console.log("#### postUpload req.body >> ", req.body);
    console.log("#### postUpload req.file >> ", req.file);
    console.log('===============================================');

    models.Post.create({
        user_id : req.body.user_id,
        content : req.body.content,
        img : req.file.path,
    }).then(result => {
        // console.log('### res >> ',res);
        res.send({
            user_id : req.body.user_id,
            content : req.body.content,
            img : req.file.path,
        });
    })
}

exports.postViewOne = (req,res) => {
    models.Post.findOne({
        where : {id : req.body.id}
    }).then(result => {
        res.send(result);
    })
}