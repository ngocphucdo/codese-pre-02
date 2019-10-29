// ex2
function tong1(a, b) {
    return a + b;
}

let tong2 = function (a, b) {
    return a + b;
};

// ECMA Script 6
let tong3 = (a, b) => {
    // Arrow Function
    return a + b;
};

let tong4 = (a, b) => ({
    tenham: "tong",
    ketqua: a + b
});

console.log(tong4(4, 5))