const a = 10;
const b = 6;
tong = a + b;

// cach1
function tinhTong1(a, b) {
    console.log("a + b = ", tong);
}
tinhTong1(a, b);

// cach2
tinhTong2 = function (a, b) {
    console.log("a + b = ", tong);
}
tinhTong2();