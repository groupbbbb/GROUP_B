const express = require("express");
const controller = require("../controller/Cpost");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const upload = multer({
  dest: "static/img/postUploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "static/img/postUploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/", controller.main);
router.get("/post/post", controller.viewPage);
router.get("/post/upload", controller.uploadPage);

router.post("/post/upload", uploadDetail.array("img"), controller.uploadPost);
router.post("/post/delete", controller.deletePost);
router.post("/post/edit", controller.editPost);
router.post("/post/editSessionCheck", controller.editPostSessionCheck);
router.post("/post/viewThis", controller.viewThisPost);

router.post("/post/viewComment", controller.viewComment);
router.post("/post/uploadComment", controller.uploadComment);
router.post("/post/deleteComment", controller.deleteComment);
router.post("/post/editComment", controller.editComment);
router.post(
  "/post/editCommentSessionCheck",
  controller.editCommentSessionCheck
);
router.post("/post/viewThisComment", controller.viewThisComment);

router.post("/post/viewLike", controller.viewLike);
router.post("/post/viewThisLike", controller.viewThisLike);
router.post("/post/viewThisLiked", controller.viewThisLiked);
router.post("/post/addLike", controller.addLike);
router.post("/post/removeLike", controller.removeLike);

module.exports = router;
