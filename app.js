const express = require("express");
const Socket = require("socket.io");
const session = require("express-session");
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
app.use("/common", express.static(__dirname + "/common"));
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/pages", express.static(__dirname + "/pages"));

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

app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);

const userRouter = require("./routes/user");
const chatRouter = require('./routes/chat');
const postRouter = require("./routes/post");

app.use("/user", userRouter);
app.use('/chat', chatRouter);
app.use("/", postRouter);   // 메인이 post 컨트롤러 사용

app.get("/", (req, res) => {
  res.render("pages/main");
});

app.get("/upload", (req, res) => {
  return res.render("pages/upload");
});

app.get("/signin", (req, res) => {
  res.render("pages/signin");
});

app.get("/signup", (req, res) => {
  res.render("pages/signup");
});

app.get("/mypage", (req, res) => {
  res.render("pages/mypage");
});

app.get("/mypageEdit", (req, res) => {
  res.render("pages/mypageEdit");
});

app.get("/profile_edit", (req, res) => {
  res.render("pages/profile_edit");
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
