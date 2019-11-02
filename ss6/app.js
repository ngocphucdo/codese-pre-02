const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");

let app = express();

//set-up handlebars
let option = {
  defaultLayout: "main"
};
let render = handlebars(option);
app.set("view engine", "handlebars");
app.engine("handlebars", render);

//set-up routers
app.get("/", (req, res) => {
  res.render("trang1");
});
app.get("/info", (req, res) => {
  res.render("trang2");
});
//set-up chay file cssa
app.use(express.static("public"));

//set-up server
app.listen(3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("App listen at 3000");
  }
});
