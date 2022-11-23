"use strict";

class Financiamento {
  valorFinanciamento;
  taxaJuros;

  constructor(valorFinanciamento, taxaJuros) {
    this.valorFinanciamento = valorFinanciamento;
    this.taxaJuros = taxaJuros;
  }
}

taxaJuros = 0.07; // ERRO

let financiamento = new Financiamento(5000, 0.04);

console.log(financiamento.taxaJuros); // 0.04
console.log(financiamento.valorFinanciamento); // 5000
