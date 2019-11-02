 const express = require("express");
 const path = require("path");
 const handlebars = require("express-handlebars");
 const bodyParser = require("body-parser")


 let app = express();
 app.use(bodyParser.urlencoded({
     extended: false
 }));


 let option = {
     defaultLayout: "main"
 };
 let render = handlebars(option);
 app.engine("handlebars", render)
 app.set("view engine", "handlebars");


 app.get("/", (req, res) => {
     res.render("mainPage");
 })

 app.get("/ask", (req, res) => {

     res.render("askPage");

 })

 app.post("/ask", (req, res) => {
     let data = req.body.question;
     res.send(data);
     console.log(data);

 })







 app.listen(3000, err => {
     if (err) {
         console.log(err);
     } else {
         console.log("app listening at 3000");
     }
 })