var x = 10;
console.log(x);

function sum(number1, number2) {
  // A VARIÁVEL "x" É VISÍVEL DENTRO DESSE ESCOPO, POIS É VAR.
  console.log(x);
  return number1 + number2;
}

let z = "HOME";

function sayAnything() {
  // A VARIÁVEL "z" NÃO É VISÍVEL DENTRO DESSO ESCOPO, POIS É LET.
  console.log(z);
}
