// ---------------
// Union Types
// ---------------
let someId: number | string;
someId = 1;
someId = "2";

let email: string | null = null;
email = "rassoul@gmail.com";

type Id = number | string;
let anotherId: Id;
anotherId = "eknnevnkvez";
anotherId = 167;

//-----------------------
// union type pitfall
// ---------------------

function swapIdType(id: Id): Id {
  // can only use props and methods common to
  // both number and string types
  // parseInt(id) --> not allowed
  parseInt(id);
  return id;
}
swapIdType("5");
