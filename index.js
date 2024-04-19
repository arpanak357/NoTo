const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const bodyparser = require("body-parser");

app.use(express.static("public"));

const csspath = path.join(__dirname, "/public/css");
const jspath = path.join(__dirname, "/public/js");
const imgpath = path.join(__dirname, "/public/image");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/js", express.static(jspath));
app.use("/css", express.static(csspath));
app.use("/image", express.static(imgpath));
app.set("view engine", "ejs");
app.set("views", "./views");


app.get("/", (req, res) => {
    res.render("index");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})