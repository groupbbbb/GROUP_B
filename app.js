const express = require("express");
const session = require('express-session');

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/common", express.static(__dirname + "/common"));
app.use("/static", express.static(__dirname + "/static"));
app.use("/pages", express.static(__dirname + "/pages"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
  })
);


app.get('/', (req, res) => {
  const user = req.session.user;
  if (user !== undefined) {
    res.render('pages/mainpage', { isLogin: true, user: user });
  } else {
    res.render('pages/mainpage', { isLogin: false });
  }
});

const userRouter = require('./routes/user');
// const chatRouter = require('./routes/chat');
const postRouter = require('./routes/post');

app.use('/user', userRouter);
// app.use('/chat', chatRouter);
app.use('/post', postRouter);


// app.get("/upload", (req, res) => {
//   return res.render("pages/upload");
// });

// app.get("/login", (req, res) => {
//   res.render("pages/login");
// });

// app.get("/signup", (req, res) => {
//   res.render("pages/signup");
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

