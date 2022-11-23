"use strict";

class Lab {
  #nome;
  #capacidade;

  constructor(nome, capacidade) {
    this.#nome = nome;
    this.#capacidade = capacidade;
  }

  getNome() {
    return this.#nome;
  }

  setNome(nome) {
    this.#nome = nome;
  }

  getCapacidade() {
    return this.#capacidade;
  }

  setCapacidade(capacidade) {
    this.#capacidade = capacidade;
  }
}

const lab = new Lab("Informática", "50");
let texto = `Laboratório de ${lab.getCapacidade()}. Capacidade: ${lab.getCapacidade()}`;
