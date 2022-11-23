export class Parcela {
  #numero;
  #valor;
  #juros;
  #armotizacao;
  #saldo;

  constructor(numero, valor, juros, armotizacao, saldo) {
    this.#numero = numero;
    this.#valor = valor;
    this.#juros = juros;
    this.#armotizacao = armotizacao;
    this.#saldo = saldo;
  }
}

