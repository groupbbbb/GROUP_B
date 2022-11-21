const express = require('express');
const controller = require('../controller/Cpost');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'static/img/postUploads/',
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'static/img/postUploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});


router.get('/',controller.viewPage);
router.get('/upload',controller.uploadPage);

router.post('/viewThis',controller.viewThis);
router.post('/upload',uploadDetail.single('img'),controller.uploadPost);
router.post('/delete',controller.deletePost);

module.exports = router;