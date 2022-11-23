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

  getSaldo() {
    return this.#saldo;
  }

  getDadosFormatados() {
    const dados = [];
    dados.push(this.#numero);
    dados.push(
      this.#valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
    dados.push(
      this.#armotizacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
    dados.push(
      this.#juros.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
    dados.push(
      this.#saldo.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );

    return dados;
  }
}
