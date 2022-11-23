"use strict";

class Produto {
  codigo;
  nome;

  constructor(codigo, nome) {
    this.codigo = codigo;
    this.nome = nome;
  }
}

class Disciplina {
  codigo;
  nome;

  constructor(codigo, nome) {
    this.codigo = codigo;
    this.nome = nome;
  }
}

const d1 = new Disciplina(123, "Matemática");

console.log(d1);
const d2 = d1;

d2.codigo = 444;
d2.nome = "Física";
d2.nota = "7";
console.log(d2);
