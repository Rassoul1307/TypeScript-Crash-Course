// ------------------------
// any type
// ------------------------
let age: any;
age = 25;
age = false;
age = "age";

// ------------------------
// any type in arrays
// ------------------------

let thingss: any[] = ["hello", true, 30];

// ------------------------
// any and function
// ------------------------

function addTogether(value: any): any {
  return value + value;
}

const resultOne = addTogether("hello");
const resultTwo = addTogether(2);

console.log(resultOne);
