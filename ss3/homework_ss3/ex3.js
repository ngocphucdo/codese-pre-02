const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
var n = 0;
readline.question(`Input: `, (n) => {

    var arr = []
    while (arr.length < n) {
        var r = Math.floor(Math.random() * 100) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    function compareNumbers(a, b) {
        return a - b;
    }
    console.log(arr.sort(compareNumbers));
    readline.close();
})