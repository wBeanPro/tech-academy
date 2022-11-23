let name = "Anna";
name = "Hannah";
console.log(typeof name); // String

// CONCATENAR
let firstName = "Anna";
let lastName = "Kurt";

console.log(firstName + " " + lastName); // Anna Kurt.
console.log(`${firstName} ${lastName}`); // Anna Kurt using Template String.

// Métodos de String
let str = "lorem ipsum";
console.log(str.length); // 10
console.log(str.toUpperCase); // LOREM IPSUM
console.log(str.toLowerCase); // lorem ipsum

let number_1 = "50",
  number_2 = "54";
console.log(parseInt(number_1) + parseInt(number_2)); // 104

// Substituir partes de uma string
let myName = "Katelyn Sarcet";
let myNewName = myName.replace("Sarcet", "Rusos");
console.log(myNewName); // Katelyn Rusos
