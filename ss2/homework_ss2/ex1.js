var pw = "";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var letter = /[a-z]/;
var upper = /.*[A-Z].*[A-Z].*[A-Z]/;
var number = /([0-9]{2})/;
var symbol = /[!@#$%^&*]/;

readline.question(`What's your password?\n`, (pw) => {
    if (!letter.test(pw)) {
        console.log("your pw must include a lowercase letter");
    }
    if (!number.test(pw)) {
        console.log("your pw must include minimum of two numbers ");
    }
    if (!upper.test(pw)) {
        console.log("your pw must include minimum of three uppercase letters");
    }
    if (!symbol.test(pw)) {
        console.log("your pw must include maximum a special symbols");
    }
    readline.close()
})