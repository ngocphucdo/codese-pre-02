// console.log("hello world");
let a = 4;
// let b = 5;
// console.log("a + b = ", a + b,
//     "a - b = ", a - b,
//     "a * b = ", a * b,
//     "a / b = ", a / b);

// if (a == 4) {
//     console.log("a la 4")
// } else {
//     console.log("a khong phai 4")
// }


// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }
let x1, x2;
let x = 20;
let y = 1000;
let z = 102;
let delta = (y * y - 4 * x * z);

if (delta == 0) {
    console.log("Pt co nghiem kep:");
    x1 = -y / (2 * x);
    x2 = -y / (2 * x);
    console.log(x1, " , ", x2)
} else if (delta < 0) {
    console.log("Pt vo nghiem");
} else {
    console.log("Pt co 2 nghiem");
    x1 = (-y - Math.sqrt(delta)) / (2 * x);
    x2 = (-y + Math.sqrt(delta)) / (2 * x);
    console.log("x1 = ", x1, "va x2 = ", x2)

}