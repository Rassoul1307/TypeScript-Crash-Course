"use strict";
// -------------------------
// FUNCTION
// ------------------------
function addTwoNUMBER(a, b) {
    return a + b;
}
const soustractTwoNumber = (a, b) => {
    return a - b;
};
addTwoNUMBER(15, 5);
soustractTwoNumber(10, 7);
function addAllNumber(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumber([1, 2, 3, 4, 5]);
