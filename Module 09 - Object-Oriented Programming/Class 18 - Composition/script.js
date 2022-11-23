"use strict";

class Loja {
  #nome;
  #produtos = [];

  constructor(nome) {
    this.#nome = nome;
  }

  adicionaProduto(produto) {
    this.#produtos.push(produto);
  }

  exibeProdutos() {
    console.log(`Lista de Produtos da Loja ${this.#nome}`);
    for (const produto of this.#produtos) {
      console.log(produtos.getDados());
    }
  }
}

class Produto {
  #tipo;

  constructor(tipo) {
    this.#tipo = tipo;
  }

  getDados() {
    return this.#tipo;
  }
}

class CupomDesconto {
  #desconto1 = 10;
  #desconto2 = 20;

  getDesconto(gastos) {
    if (gastos >= 100 && gastos <= 3000) {
      console.log(`Você tem direito a ${this.#desconto1}% de desconto`);
    } else if (gastos > 3000) {
      console.log(`Você tem direito a ${this.#desconto2}% de desconto`);
    } else {
      console.log("Infelizmente você não tem cupons no momento!");
    }
  }
}

class Cliente {
  #nome;
  #gastosAcumulados = 0;
  #cupom;

  constructor(nome) {
    this.#nome = nome;
    this.#cupom = new CupomDesconto();
  }

  getBeneficios() {
    this.#cupom.getDesconto(this.#gastosAcumulados);
  }

  setGastos(valor) {
    this.#gastosAcumulados += valor;
  }
}
