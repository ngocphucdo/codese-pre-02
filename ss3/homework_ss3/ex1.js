var text = "";
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(`Input: \n`, (text) => {
    var res = text.split(" ");

    function loopThroughSplittedText() {
        for (var i = 0; i < res.length; i++) {
            (function (i) {
                setTimeout(function () {
                    console.log(res[i]);
                }, 1000 * i);
            })(i);
        };
    }
    loopThroughSplittedText(res);
    readline.close()
})

//Cách giải khác:
let str = "   kia  con    buom vang   ";
let arr = ["kia", "con", "buom", "vang"];

str = str.trim(); // space tab newline
while (str.includes("  ")) {
    str = str.replace("  ", " ");
}
console.log(":" + str + ":");

let arrStr = str.split(" ");

console.log(arrStr);
for (let i = 0; i < arrStr.length; i++) {
    setTimeout(() => {
        console.log(arrStr[i]);
    }, i * 1000);
}