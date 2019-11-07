const express = require('express');
const path = require('path');


let app = express();



app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/convert.html"));

});

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("app listing at port 3000");
    }
})