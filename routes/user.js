const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'static/img/userprofileUploads/',
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'static/img/userprofileUploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 8 * 1024 * 1024 },
});

router.get('/signup', controller.signup);
router.post('/signup', controller.post_signup);
router.post('/idCheck', controller.idCheck);

router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);


router.get('/mypage', controller.mypage);
router.post('/signout', controller.signout);

router.post('/getMyInform', controller.getMyInform);
router.post('/modifyUserInform', controller.modifyUserInform);
router.post('/profileUpload',uploadDetail.single('profileUpload'),controller.profileUploads);
router.post('/modifyPW', controller.modifyPW);

// 임시
router.post('/mylike', controller.getMyLike);
router.post('/mypost', controller.getMyPost);

router.post('/deleteMyPost', controller.deleteMyPost);
router.post('/editMyPost', controller.editMyPost);
router.post('/deleteMyLike', controller.deleteMyLike);

module.exports = router;