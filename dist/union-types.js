"use strict";
// ---------------
// Union Types
// ---------------
let someId;
someId = 1;
someId = "2";
let email = null;
email = "rassoul@gmail.com";
let anotherId;
anotherId = "eknnevnkvez";
anotherId = 167;
//-----------------------
// union type pitfall
// ---------------------
function swapIdType(id) {
    // can only use props and methods common to
    // both number and string types
    // parseInt(id) --> not allowed
    parseInt(id);
    return id;
}
swapIdType("5");
