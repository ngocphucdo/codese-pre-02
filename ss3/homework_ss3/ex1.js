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