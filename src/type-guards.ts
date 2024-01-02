//-----------------------
// type guard
// ---------------------

type Identifiant = number | string;
function swapIdType(id: Identifiant) {
  if (typeof id === "number") {
    return id.toString();
  } else {
    return parseInt(id);
  }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");

console.log(idOne, idTwo);

//-----------------------
// tagged interfaces
// ---------------------
interface Users {
  type: "user";
  username: string;
  email: string;
  id: Identifiant;
}

interface Person {
  type: "person";
  firstname: string;
  age: number;
  id: Identifiant;
}

function logDetail(value: Users | Person): void {
  if (value.type === "user") {
    console.log(`User : ${value.username}, Email : ${value.email}`);
  }
  if (value.type === "person") {
    console.log(`Personne : ${value.firstname}, Age : ${value.age}`);
  }
}
const userO: Users = {
  type: "user",
  username: "John Doe",
  email: "john@doe.com",
  id: 345,
};
const personO: Person = {
  type: "person",
  firstname: "Jane",
  age: 28,
  id: "765",
};
logDetail(personO); // User : John Doe, Email : john@doe.com
