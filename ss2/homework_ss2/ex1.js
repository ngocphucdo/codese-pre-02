var pw = "CodesePreWeb02!";

var letter = /[a-z]/;
var upper = /.*[A-Z].*[A-Z].*[A-Z]/;
var number = /([0-9]{2})/;
var symbol = /[!@#$%^&*]/;

if (!letter.test(pw)) {
    console.log("make sure pw includes a lowercase letter");
}
if (!number.test(pw)) {
    console.log("pw must include minimum of two numbers ");
}
if (!upper.test(pw)) {
    console.log("pw must include minimum of three uppercase letter");
}
if (!symbol.test(pw)) {
    console.log("make sure pw includes maximum a special symbols");
}