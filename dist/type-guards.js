"use strict";
//-----------------------
// type guard
// ---------------------
function swapIdType(id) {
    if (typeof id === "number") {
        return id.toString();
    }
    else {
        return parseInt(id);
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");
console.log(idOne, idTwo);
function logDetail(value) {
    if (value.type === "user") {
        console.log(`User : ${value.username}, Email : ${value.email}`);
    }
    if (value.type === "person") {
        console.log(`Personne : ${value.firstname}, Age : ${value.age}`);
    }
}
const userO = {
    type: "user",
    username: "John Doe",
    email: "john@doe.com",
    id: 345,
};
const personO = {
    type: "person",
    firstname: "Jane",
    age: 28,
    id: "765",
};
logDetail(personO); // User : John Doe, Email : john@doe.com
