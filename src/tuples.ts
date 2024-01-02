// -------------
// typles
// ------------

let user: [string, number, boolean] = ["ahmed", 22, true];

// -------------
// typles
// ------------
let xy: [number, number];
xy = [3, 4];
console.log(xy);

function useCords(): [number, number] {
  const lat = 100;
  const long = 50;

  return [lat, long];
}

const [lat, long] = useCords();

console.log(lat);
console.log(long);

// -------------
// named typles
// ------------
let utilisateur: [name: string, age: number];
utilisateur = ["rassoul", 23];
console.log(utilisateur[0]);
