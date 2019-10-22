const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
var number = "";
var numberToString = number.toString();
readline.question(`What's your number?\n`, (numberToString) => {
    console.log(new Intl.NumberFormat().format(numberToString))
    readline.close()
})