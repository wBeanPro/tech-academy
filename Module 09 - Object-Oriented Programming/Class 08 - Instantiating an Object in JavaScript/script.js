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
console.log(d1.codigo); // 123

const p1 = new Produto(123, "Mochila");
console.log(d1.nome); // Mochila

const d2 = new Disciplina(123, "Química");
console.log(d1.nome); // Química
