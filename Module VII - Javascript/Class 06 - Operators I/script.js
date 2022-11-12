/*
  ================== OPERADORES MATEMÁTICOS ==================
  SOMA = 5 + 5
  SUBTRAÇÃO = 5 - 5
  MULTIPLICAÇÃO = 5 * 5
  DIVISÃO = 5 / 5
  EXPONENCIAÇÃO = 5 ** 5

  ================== OPERADORES ATRIBUIÇÃO ==================
  ATRIBUIÇÃO = VARIÁVEL = 5
  ATRIBUIÇÃO SOMA = VARIÁVEL += 5
  ATRIBUIÇÃO MULTIPLICAÇÃO = VARIÁVEL *= 5
  ATRIBUIÇÃO DIVISÃO = VARIÁVEL /= 5
  ATRIBUIÇÃO EXPONENCIAÇÃO = VARIÁVEL **= 5

  ================== OPERADORES RELACIONAIS ==================
  MAIOR QUE - >
  MENOR QUE - <
  MAIOR OU IGUAL A - >=
  MENOR OU IGUAL A - <=
  
  ================== OPERADORES IGUALITÁRIOS ==================
  IGUAL A - ==
  IDÊNTICOS - ===
  DIFERENTE DE - !=
*/

// VARIÁVEIS
let numberOne = 2,
  numberTwo = 5;

// OPERADORES MATEMÁTICOS
let sum = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;
let exponentiation = numberOne ** numberTwo;

// OPERADORES ATRIBUIÇÃO
let attrSum = (numberOne += numberTwo);
let attrSubtraction = (numberOne -= numberTwo);
let attrMultiplication = (numberOne *= numberTwo);
let attrDivision = (numberOne /= numberTwo);
let attrExponentiation = (numberOne **= numberTwo);

// OPERADORES RELACIONAIS
console.log(5 > 5); // FALSE
console.log(5 >= 5); // TRUE
console.log(5 < 5); // FALSE
console.log(5 <= 5); // TRUE

// OPERADORES IGUALITÁRIOS
console.log(5 == "5"); // TRUE
console.log(5 === "5"); // FALSE
console.log(5 === 5); // TRUE
console.log(5 != "5"); // FALSE
console.log(5 !== 5); // TRUE
