const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const handlebars = require("express-handlebars")
const fs = require('fs');

let app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    fs.exists("data.json", exists => {
        if (exists) {
            let data = fs.readFileSync("data.json", "utf8");
            let obj = JSON.parse(data);
            let questionContent = obj[Math.floor(Math.random() * obj.length)];
            res.render("mainPage", {
                cauhoi: "Câu hỏi: " + questionContent.questionContent
            });
        } else {
            res.render("mainPage", {
                questionContent: "Hiện chưa có câu hỏi nào!!!"
            });
        }
    });
});

app.get('/ask', (req, res) => {
    res.render("askPage");
});

app.post('/ask', (req, res) => {
    let questionContent = req.body.qs
    try {
        let data = fs.readFileSync("data.json", 'utf8')
        let objData = JSON.parse(data)
        let newQuestion = {
            id: objData.length,
            questionContent: questionContent,
            questionAnswers: []
        }
        objData.push(newQuestion)
        let jsonData = JSON.stringify(objData)
        fs.writeFile("data.json", jsonData, (err) => {
            console.log(err)
            res.render("mainPage")

        })
    } catch (error) {
        let data = [];
        let newQuestion = {
            id: 0,
            questionContent: questionContent,
            questionAnswers: []
        }
        data.push(newQuestion);
        let savedData = JSON.stringify(data);
        fs.writeFile('data.json', savedData, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("saved")
                res.render("mainPage")
            }
        })
    }

})


app.listen(3000, err => {
    if (err) {
        console.log("app", err);
    } else {
        console.log("app listening at port 3000");
    }
});