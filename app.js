const express = require("express");
const Socket = require("socket.io");
const app = express();
const PORT = 8080;
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.get("/chat", (req, res) => {
  res.render("pages/chat");
});

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
