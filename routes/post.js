// const express = require('express');
// const controller = require('../controller/Cpost');
// const router = express.Router();

// const user_controller = require('../controller/Cuser');

// router.get('/', controller.main);

// router.get('/user/signin', user_controller.signin);
// router.get('/user/signup', user_controller.signup);

// router.post('/user/signin', user_controller.postSignin);
// router.post('/user/signup', user_controller.postSignup);

// router.post('/user/profile',user_controller.postProfile);
// router.post('/user/profile/edit',user_controller.patchProfile);
// router.post('/user/profile/delete',user_controller.deleteProfile);


// module.exports = router;

// =========================================================================================

const express = require('express');
const controller = require('../controller/Cpost');
const router = express.Router();

const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'static/img/uploads/',
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // req: 요청에 대한 정보
      // file: 파일에 대한 정보
      // done(에러, 저장경로): 함수
      done(null, 'static/img/uploads/'); // 경로설정
    },
    filename(req, file, done) {
      // req: 요청에 대한 정보
      // file: 파일에 대한 정보
      // done: 함수
      const ext = path.extname(file.originalname); // file.originalname에서 "확장자" 추출
    //   done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // [파일명+현재시간.확장자] 이름으로 바꿔서 파일 업로드
      // 현재시간: 파일명이 겹치는 것을 막기 위함
      // file.originalname,ext => 확장자 떼고 파일 이름만

      // 아이디 + 현재시간.확장자
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    //   done(null, req.body.id + Date.now() + ext);
      
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});


router.get('/',controller.postView);
router.get('/upload',controller.Upload);


// router.post('/postUpload',controller.postUpload);
router.post('/postUpload',uploadDetail.single('img'),controller.postUpload);
router.post('/postViewOne',controller.postViewOne);

module.exports = router;