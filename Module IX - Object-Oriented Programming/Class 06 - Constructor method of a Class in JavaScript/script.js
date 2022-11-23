"use strict";

class NomeDaClasse {
  constructor(parametro1, parametro2) {
    this.atributo1 = parametro1;
    this.atributo2 = parametro2;
  }
}

class Filme {
  constructor(titulo, ano) {
    this.titulo = titulo;
    this.ano = ano;
  }
}

let myMovie = new Filme("Aprendendo Javascript POO", 2022);
console.log(myMovie.titulo); // Aprendendo Javascript POO
console.log(myMovie.ano); // 2022
