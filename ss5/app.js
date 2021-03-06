const express = require("express")
const path = require("path")

let app = express()

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));

})

app.get("/about", (req, res) => {
    res.send("Day la trang web khac")
})

app.use(express.static("public"))

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("App listen at 3000")
    }
})