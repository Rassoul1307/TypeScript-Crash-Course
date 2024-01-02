"use strict";
// -------------
// typles
// ------------
let user = ["ahmed", 22, true];
// -------------
// typles
// ------------
let xy;
xy = [3, 4];
console.log(xy);
function useCords() {
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
let utilisateur;
utilisateur = ["rassoul", 23];
console.log(utilisateur[0]);
