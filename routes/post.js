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
      done(null, 'static/img/uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
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