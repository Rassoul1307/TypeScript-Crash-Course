// --------------
// Arrays
// --------------
let names: string[] = ["ahmed", "rassoul", "fall"];
let ages: number[] = [12, 34, 21];

names.push("baba");
ages.push(11);

const f = names[3];

let things = [1, true, "hello"];

const t = things[2];

console.log(t);

// ------------------
// object literals
// ------------------

let person: { firstname: string; age: number; id: number } = {
  firstname: "Ahmed",
  age: 28,
  id: 101,
};

person.age = 29;

console.log(person);
