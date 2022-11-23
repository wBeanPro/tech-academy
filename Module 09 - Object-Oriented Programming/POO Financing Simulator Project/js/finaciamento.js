import { Parcela } from "./parcela";

class Financiamento {
  #taxaJuros;
  #prazo;
  #parcelas = [];

  constructor(valor, entrada, taxaJuros, prazo) {
    this.#taxaJuros = taxaJuros;
    this.#prazo = prazo;
    this.#parcelas.push(new Parcela(0, 0, 0, 0, valor - entrada));
  }
}
