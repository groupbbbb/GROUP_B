const express = require("express");

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/common", express.static(__dirname + "/common"));
app.use("/static", express.static(__dirname + "/static"));
app.use("/pages", express.static(__dirname + "/pages"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("pages/mainpage");
});

app.get("/upload", (req, res) => {
  return res.render("pages/upload");
});

app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.get("/signup", (req, res) => {
  res.render("pages/signup");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
