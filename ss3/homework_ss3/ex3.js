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
//Cách giải khác: 
// let n = 10;
// let answer = [];
// while (answer.length < n) {
//     let newValue = Number.parseInt(Math.random() * 100);
//     if (answer.indexOf(newValue) == -1) {
//         answer.push(newValue);
// [1,2,3].push(4) // [1,2,3,4]
// [1,1,2,3].pop() => 3 // [1,1,2]
//     }
// }

// function indexOf(k) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == k) return i;
//     }
//     return -1;
// }
// answer.sort((a, b) => a > b);
// console.log(typeof answer);