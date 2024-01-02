"use strict";
// ------------------------
// any type
// ------------------------
let age;
age = 25;
age = false;
age = "age";
// ------------------------
// any type in arrays
// ------------------------
let thingss = ["hello", true, 30];
// ------------------------
// any and function
// ------------------------
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether("hello");
const resultTwo = addTogether(2);
console.log(resultOne);
