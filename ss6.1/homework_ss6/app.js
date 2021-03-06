// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const handlebars = require("express-handlebars")
// const fs = require('fs');

// let app = express();
// app.use(bodyParser.urlencoded({
//     extended: false
// }))

// app.engine("handlebars", handlebars({
//     defaultLayout: "main"
// }))
// app.set("view engine", "handlebars");

// app.get("/", (req, res) => {
//     res.render('mainPage');
// });

// app.get("/login", (req, res) => {
//     res.render('loginPage');
// });

// let rawdata = fs.readFileSync('data.json');
// let objData = JSON.parse(rawdata);

// app.post('/login', (req, res) => {

//     let acc = req.body.account;
//     let pw = req.body.pw;

//     if (acc == objData.userName && pw == objData.password) {
//         res.send("login successful! ")
//     } else {
//         res.send("wrong username or password, pls login again")
//     }
// })

// app.listen(3000, err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("app listening at port 3000");
//     }
// });

//Chữa bài tập buổi 6 by Vũ Hiếu

const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const fs = require("fs");

let app = express();
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.engine(
    "handlebars",
    handlebars({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

let rawdata = fs.readFileSync("data.json");
let objData = JSON.parse(rawdata);

app.get("/", (req, res) => {
    res.render("loginPage");
});

app.post("/", (req, res) => {
    let acc = req.body.account;
    let pw = req.body.pw;

    if ((acc == objData.username && pw == objData.password)) {
        res.send("login successful !");
    } else {
        res.render('loginPage', {
            loginStatus: "<h3>Dang nhap that bai</h3>"
        })
    }
});

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("app listening at port 3000");
    }
});