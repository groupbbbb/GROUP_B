const express = require("express");
const Socket = require("socket.io");
const app = express();
const PORT = 8080;
const http = require("http").Server(app);
const io = require("socket.io")(http);
const multer = require("multer");
const path = require("path");
const upload = multer({
  dest: "uploads/",
});
const moment = require("moment");

// multer 적용
const fileFilter = (req, file, cb) => {
  // 확장자 필터링
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    req.fileValidationError = "jpg,jpeg,png,gif,webp 파일만 업로드 가능합니다.";
    cb(null, false);
  }
};

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  fileFilter: fileFilter,
  limits: { fileSize: 30 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on("connection", (socket) => {
  socket.on("chatting", (data) => {
    const { name, msg } = data;
    io.emit("chatting", {
      name: name,
      msg: msg,
      time: moment(new Date()).format("h:ss A"),
    });
  });
});

app.get("/", (req, res) => {
  res.render("pages/main");
});

// 기본경로: lcoalhost:PORT/chat
const chatRouter = require("./routes/chat");
app.use("/chat", chatRouter);
// const userRouter = require('./routes/user');
// app.use('/post', postRouter);
// const postRouter = require('./routes/post');
// app.use('/user', userRouter);

app.get("/upload", (req, res) => {
  return res.render("pages/upload");
});

app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.get("/signup", (req, res) => {
  res.render("pages/signup");
});

app.post(
  "/dynamicFile",
  uploadDetail.single("dynamicFile"),
  function (req, res) {
    console.log(req.file);
    res.send(req.file);
  }
);

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
